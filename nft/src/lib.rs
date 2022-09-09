/*!
Non-Fungible Token implementation with JSON serialization.
NOTES:
  - The maximum balance value is limited by U128 (2**128 - 1).
  - JSON calls should pass U128 as a base-10 string. E.g. "100".
  - The contract optimizes the inner trie structure by hashing account IDs. It will prevent some
    abuse of deep tries. Shouldn't be an issue, once NEAR clients implement full hashing of keys.
  - The contract tracks the change in storage before and after the call. If the storage increases,
    the contract requires the caller of the contract to attach enough deposit to the function call
    to cover the storage cost.
    This is done to prevent a denial of service attack on the contract by taking all available storage.
    If the storage decreases, the contract will issue a refund for the cost of the released storage.
    The unused tokens from the attached deposit are also refunded, so it's safe to
    attach more deposit than required.
  - To prevent the deployed contract from being modified or deleted, it should not have any access
    keys on its account.
*/
use std::convert::TryFrom;
use std::str::Bytes;

use near_contract_standards::non_fungible_token::metadata::{
    NFTContractMetadata, NonFungibleTokenMetadataProvider, TokenMetadata, NFT_METADATA_SPEC,
};
// use near_sdk::json_types::U128;
use near_contract_standards::non_fungible_token::NonFungibleToken;
use near_contract_standards::non_fungible_token::{Token, TokenId};
use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::collections::{LazyOption, LookupSet, UnorderedSet};
use near_sdk::env::promise_batch_action_add_key_with_full_access;
use near_sdk::json_types::ValidAccountId;
use near_sdk::serde::{Deserialize, Serialize};
use near_sdk::{
    env, log, near_bindgen, AccountId, Balance, BorshStorageKey, PanicOnDefault, Promise,
    PromiseOrValue,
};

near_sdk::setup_alloc!();

pub const DEFAULT_MINT_PRICE: u128 = 10_u128;
pub const DEFAULT_MAX_SUPPLY: u32 = 10;

#[derive(Serialize, Deserialize, BorshDeserialize, BorshSerialize, PanicOnDefault, Clone)]
#[serde(crate = "near_sdk::serde")]
pub struct Rational {
    /// numerator
    pub n: u32,
    /// denominator
    pub d: u32,
    /// base
    pub b: u32,
}

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    tokens: NonFungibleToken,
    treasury_id: AccountId,
    metadata: LazyOption<NFTContractMetadata>,
    /// The maximum number of NFTs to be minted
    max_supply: u32,
    /// The price (in whole Near) for each NFT
    mint_price: Balance,
    /// Keep track of the minted rational pairs
    minted_rational_pairs: LookupSet<(Rational, Rational)>,
    /// base media URL:
    base_url: String,
    numb_circulating: u32,
}

// TODO: overwrite...
const DATA_IMAGE_SVG_NEAR_ICON: &str = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 288 288'%3E%3Cg id='l' data-name='l'%3E%3Cpath d='M187.58,79.81l-30.1,44.69a3.2,3.2,0,0,0,4.75,4.2L191.86,103a1.2,1.2,0,0,1,2,.91v80.46a1.2,1.2,0,0,1-2.12.77L102.18,77.93A15.35,15.35,0,0,0,90.47,72.5H87.34A15.34,15.34,0,0,0,72,87.84V201.16A15.34,15.34,0,0,0,87.34,216.5h0a15.35,15.35,0,0,0,13.08-7.31l30.1-44.69a3.2,3.2,0,0,0-4.75-4.2L96.14,186a1.2,1.2,0,0,1-2-.91V104.61a1.2,1.2,0,0,1,2.12-.77l89.55,107.23a15.35,15.35,0,0,0,11.71,5.43h3.13A15.34,15.34,0,0,0,216,201.16V87.84A15.34,15.34,0,0,0,200.66,72.5h0A15.35,15.35,0,0,0,187.58,79.81Z'/%3E%3C/g%3E%3C/svg%3E";

/// # The contract methods
/// As an aside, if you want to burn an NFT just send it to the 'system' account
#[near_bindgen]
impl Contract {
    #[init]
    pub fn new_default_meta() -> Self {
        Self::new(
            ValidAccountId::try_from(env::current_account_id()).unwrap(),
            ValidAccountId::try_from(env::current_account_id()).unwrap(),
            NFTContractMetadata {
                spec: NFT_METADATA_SPEC.to_string(),
                name: "3D Turles".to_string(),
                symbol: "3DTURT".to_string(),
                icon: Some(DATA_IMAGE_SVG_NEAR_ICON.to_string()), // TODO:
                base_uri: None,
                reference: None, // TODO: the github page
                reference_hash: None,
            },
            U128(DEFAULT_MINT_PRICE),
            DEFAULT_MAX_SUPPLY,
            "https://3d-turtle.netlify.app".to_string(), // TODO: fix me
        )
    }

    #[init]
    pub fn new(
        owner_id: ValidAccountId,
        treasury_id: ValidAccountId,
        metadata: NFTContractMetadata,
        mint_price: U128,
        max_supply: u32,
        base_url: String,
    ) -> Self {
        assert!(!env::state_exists(), "Already initialized");
        metadata.assert_valid();
        let res = Self {
            numb_circulating: 0,
            treasury_id: treasury_id.to_string(),
            tokens: NonFungibleToken::new::<&[u8], &[u8], &[u8], &[u8]>(
                "owner-by-id".as_bytes(),
                owner_id,
                Some("token-meta".as_bytes()),
                Some("enum-token".as_bytes()),
                Some("approve-token".as_bytes()),
            ),
            metadata: LazyOption::new("metadata".as_bytes(), Some(&metadata)),
            mint_price: mint_price.into(),
            max_supply,
            minted_rational_pairs: LookupSet::new("m-pairs".as_bytes()),
            base_url,
        };

        res
    }

    pub fn get_storage_usage(&self) -> u64 {
        env::storage_usage()
    }

    // TODO: factor out dup code
    pub fn nft_minted(&self, r1: Rational, r2: Rational) -> bool {
        let r1_simplified = r1.reduce();
        let r2_simplified = r2.reduce();

        if self
            .minted_rational_pairs
            .contains(&(r1_simplified.clone(), r2_simplified.clone()))
            || self
                .minted_rational_pairs
                .contains(&(r2_simplified.clone(), r1_simplified.clone()))
        {
            return true;
        }
        return false;
    }

    fn internal_mint(
        &mut self,
        token_id: TokenId,
        token_owner_id: ValidAccountId,
        token_metadata: Option<TokenMetadata>,
    ) -> Token {
        if self.tokens.token_metadata_by_id.is_some() && token_metadata.is_none() {
            env::panic(b"Must provide metadata");
        }
        if self.tokens.owner_by_id.get(&token_id).is_some() {
            env::panic(b"token_id must be unique");
        }

        let owner_id: AccountId = token_owner_id.into();

        // Core behavior: every token must have an owner
        self.tokens.owner_by_id.insert(&token_id, &owner_id);

        // Metadata extension: Save metadata, keep variable around to return later.
        // Note that check above already panicked if metadata extension in use but no metadata
        // provided to call.
        self.tokens
            .token_metadata_by_id
            .as_mut()
            .and_then(|by_id| by_id.insert(&token_id, &token_metadata.as_ref().unwrap()));

        // Enumeration extension: Record tokens_per_owner for use with enumeration view methods.
        if let Some(tokens_per_owner) = &mut self.tokens.tokens_per_owner {
            let mut token_ids = tokens_per_owner.get(&owner_id).unwrap_or_else(|| {
                UnorderedSet::new(
                    near_contract_standards::non_fungible_token::core::StorageKey::TokensPerOwner {
                        account_hash: env::sha256(owner_id.as_bytes()),
                    },
                )
            });
            token_ids.insert(&token_id);
            tokens_per_owner.insert(&owner_id, &token_ids);
        }

        // Approval Management extension: return empty HashMap as part of Token
        let approved_account_ids = if self.tokens.approvals_by_id.is_some() {
            Some(HashMap::new())
        } else {
            None
        };
        Token {
            token_id,
            owner_id,
            metadata: token_metadata,
            approved_account_ids,
        }
    }

    #[payable]
    pub fn burn_and_nft_mint(
        &mut self,
        burn_id: TokenId,
        r1: Rational,
        r2: Rational,
        thickness: f32,
        speed: u16,
        receiver_id: ValidAccountId,
    ) -> Token {
        if self
            .tokens
            .owner_by_id
            .get(&burn_id)
            .unwrap_or_else(|| panic!("Token with ID {} does not exist", burn_id))
            != env::predecessor_account_id()
        {
            panic!("Only the owner can burn there token");
        }
        self.tokens.internal_transfer(
            &env::predecessor_account_id(),
            &"system".to_string(),
            &burn_id,
            None,
            Some("BURN".to_string()),
        );
        self.numb_circulating -= 1;
        self.nft_mint(r1, r2, thickness, speed, receiver_id)
    }

    pub fn get_circulating_supply(&self) -> u32 {
        self.numb_circulating
    }

    /// Mint a new token with ID=`token_id` belonging to `receiver_id`.
    ///
    /// Since this example implements metadata, it also requires per-token metadata to be provided
    /// in this call. `self.tokens.mint` will also require it to be Some, since
    /// `StorageKey::TokenMetadata` was provided at initialization.
    ///
    /// `self.tokens.mint` will enforce `predecessor_account_id` to equal the `owner_id` given in
    /// initialization call to `new`.
    #[payable]
    pub fn nft_mint(
        &mut self,
        r1: Rational,
        r2: Rational,
        thickness: f32,
        speed: u16,
        receiver_id: ValidAccountId,
    ) -> Token {
        let init_storage_usage = env::storage_usage();
        if self.numb_circulating >= self.max_supply {
            panic!("Cannot mint more than {} tokens", self.max_supply);
        }

        let r1_simplified = r1.reduce();
        let r2_simplified = r2.reduce();

        if self
            .minted_rational_pairs
            .contains(&(r1_simplified.clone(), r2_simplified.clone()))
            || self
                .minted_rational_pairs
                .contains(&(r2_simplified.clone(), r1_simplified.clone()))
        {
            panic!("These fractions have already been minted!");
        }

        self.minted_rational_pairs
            .insert(&(r1_simplified.clone(), r2_simplified.clone()));

        let title = Self::make_title(&r1_simplified, &r2_simplified);
        let token_id = self.make_id();
        let token = self.internal_mint(
            token_id.clone(),
            receiver_id,
            Some(TokenMetadata {
                title: Some(title),
                description: None,
                media: Some(self.make_media_url(&r1_simplified, &r2_simplified, thickness, speed)),
                media_hash: None,
                copies: Some(1u64),
                issued_at: Some(env::block_timestamp().to_string()),
                expires_at: None,
                starts_at: None,
                updated_at: None,
                extra: None,
                reference: Some("TODO: me".to_string()),
                reference_hash: None,
            }),
        );
        self.numb_circulating += 1;
        let final_storage_usage = env::storage_usage();
        let storage_costs: Balance = (u128::from(final_storage_usage)
            - u128::from(init_storage_usage))
            * env::storage_byte_cost();

        assert!(
            env::attached_deposit() >= self.mint_price + storage_costs,
            "Expected the attached amount to equal or exceed the mint price and storage price of {}",
            self.mint_price + storage_costs
        );
        // 7520000000000000000010

        // Transfer remaining tokens back to the sender
        if env::attached_deposit() > (self.mint_price + storage_costs) {
            log!(
                "Attached {} and transfering back {}",
                env::attached_deposit(),
                env::attached_deposit() - (u128::from(self.mint_price + storage_costs))
            );
            Promise::new(env::predecessor_account_id())
                .transfer(env::attached_deposit() - (self.mint_price + storage_costs))
                .as_return();
        }
        log!("Transfering treas to {}", self.treasury_id);
        // Transfer tokens to the treasury
        Promise::new(self.treasury_id.to_string())
            .transfer(self.mint_price)
            .as_return();

        token
    }
}

impl Contract {
    fn make_title(r1: &Rational, r2: &Rational) -> String {
        format!(
            "{} / {} base {}, {} / {} base {}",
            r1.n, r1.d, r1.b, r2.n, r2.d, r2.b
        )
    }

    fn make_id(&self) -> String {
        self.tokens.owner_by_id.len().to_string()
    }

    // TODO:
    fn make_media_url(&self, r1: &Rational, r2: &Rational, thickness: f32, speed: u16) -> String {
        assert!(
            0. < thickness && thickness <= 3.,
            "thickness must be in range (0, 3]"
        );
        format!(
            "{}/#{},{},{};{},{},{};8,9,10;{};{}",
            self.base_url, r1.n, r1.d, r1.b, r2.n, r2.d, r2.b, thickness, speed
        )
    }
}

/// From Stack Overflow: https://codereview.stackexchange.com/questions/165283/fraction-type-in-rust
impl Rational {
    /// Returns a new Fraction that is equal to this one, but simplified
    pub fn reduce(&self) -> Self {
        // Use absolute value because negatives
        let gcd = gcd(self.n, self.d);
        Self {
            n: (self.n / gcd),
            d: (self.d / gcd),
            b: self.b,
        }
    }
}

/// From Stack Overflow: https://codereview.stackexchange.com/questions/165283/fraction-type-in-rust
// Calculate the greatest common denominator for two numbers
pub fn gcd(a: u32, b: u32) -> u32 {
    // Terminal cases
    if a == b {
        return a;
    }
    if a == 0 {
        return b;
    }
    if b == 0 {
        return a;
    }

    if a % 2 == 0 {
        // a is even
        if b % 2 != 0 {
            // b is odd
            return gcd(a / 2, b);
        } else {
            // a and b are even
            return gcd(a / 2, b / 2) * 2;
        }
    }

    // a is odd
    if b % 2 == 0 {
        // b is even
        return gcd(a, b / 2);
    }

    // Reduce larger argument
    if a > b {
        return gcd((a - b) / 2, b);
    }

    return gcd((b - a) / 2, a);
}

near_contract_standards::impl_non_fungible_token_core!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_approval!(Contract, tokens);
near_contract_standards::impl_non_fungible_token_enumeration!(Contract, tokens);

#[near_bindgen]
impl NonFungibleTokenMetadataProvider for Contract {
    fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()
    }
}

#[cfg(all(test, not(target_arch = "wasm32")))]
mod tests {
    use near_sdk::test_utils::{accounts, VMContextBuilder};
    use near_sdk::{testing_env, MockedBlockchain};

    use super::*;

    const MINT_STORAGE_COST: u128 = 5870000000000000000000;

    fn get_context(predecessor_account_id: ValidAccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder
            .current_account_id(accounts(0))
            .signer_account_id(predecessor_account_id.clone())
            .predecessor_account_id(predecessor_account_id);
        builder
    }

    fn sample_token_metadata() -> TokenMetadata {
        TokenMetadata {
            title: Some("Olympus Mons".into()),
            description: Some("The tallest mountain in the charted solar system".into()),
            media: None,
            media_hash: None,
            copies: Some(1u64),
            issued_at: None,
            expires_at: None,
            starts_at: None,
            updated_at: None,
            extra: None,
            reference: None,
            reference_hash: None,
        }
    }

    #[test]
    fn test_new() {
        let mut context = get_context(accounts(1));
        testing_env!(context.build());
        let contract = Contract::new_default_meta();
        testing_env!(context.is_view(true).build());
        assert_eq!(contract.nft_token("1".to_string()), None);
    }

    // #[test]
    // #[should_panic(expected = "The contract is not initialized")]
    // fn test_default() {
    //     let context = get_context(accounts(1));
    //     testing_env!(context.build());
    //     let _contract = Contract::default();
    // }

    // #[test]
    // fn test_mint() {
    //     let mut context = get_context(accounts(0));
    //     testing_env!(context.build());
    //     let mut contract = Contract::new_default_meta();

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(MINT_STORAGE_COST)
    //         .predecessor_account_id(accounts(0))
    //         .build());

    //     let token_id = "0".to_string();
    //     let token = contract.nft_mint(token_id.clone(), accounts(0), sample_token_metadata());
    //     assert_eq!(token.token_id, token_id);
    //     assert_eq!(token.owner_id, accounts(0).to_string());
    //     assert_eq!(token.metadata.unwrap(), sample_token_metadata());
    //     assert_eq!(token.approved_account_ids.unwrap(), HashMap::new());
    // }

    // #[test]
    // fn test_transfer() {
    //     let mut context = get_context(accounts(0));
    //     testing_env!(context.build());
    //     let mut contract = Contract::new_default_meta();

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(MINT_STORAGE_COST)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     let token_id = "0".to_string();
    //     contract.nft_mint(token_id.clone(), accounts(0), sample_token_metadata());

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(1)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     contract.nft_transfer(accounts(1), token_id.clone(), None, None);

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .account_balance(env::account_balance())
    //         .is_view(true)
    //         .attached_deposit(0)
    //         .build());
    //     if let Some(token) = contract.nft_token(token_id.clone()) {
    //         assert_eq!(token.token_id, token_id);
    //         assert_eq!(token.owner_id, accounts(1).to_string());
    //         assert_eq!(token.metadata.unwrap(), sample_token_metadata());
    //         assert_eq!(token.approved_account_ids.unwrap(), HashMap::new());
    //     } else {
    //         panic!("token not correctly created, or not found by nft_token");
    //     }
    // }

    // #[test]
    // fn test_approve() {
    //     let mut context = get_context(accounts(0));
    //     testing_env!(context.build());
    //     let mut contract = Contract::new_default_meta();

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(MINT_STORAGE_COST)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     let token_id = "0".to_string();
    //     contract.nft_mint(token_id.clone(), accounts(0), sample_token_metadata());

    //     // alice approves bob
    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(150000000000000000000)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     contract.nft_approve(token_id.clone(), accounts(1), None);

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .account_balance(env::account_balance())
    //         .is_view(true)
    //         .attached_deposit(0)
    //         .build());
    //     assert!(contract.nft_is_approved(token_id.clone(), accounts(1), Some(1)));
    // }

    // #[test]
    // fn test_revoke() {
    //     let mut context = get_context(accounts(0));
    //     testing_env!(context.build());
    //     let mut contract = Contract::new_default_meta();

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(MINT_STORAGE_COST)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     let token_id = "0".to_string();
    //     contract.nft_mint(token_id.clone(), accounts(0), sample_token_metadata());

    //     // alice approves bob
    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(150000000000000000000)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     contract.nft_approve(token_id.clone(), accounts(1), None);

    //     // alice revokes bob
    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(1)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     contract.nft_revoke(token_id.clone(), accounts(1));
    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .account_balance(env::account_balance())
    //         .is_view(true)
    //         .attached_deposit(0)
    //         .build());
    //     assert!(!contract.nft_is_approved(token_id.clone(), accounts(1), None));
    // }

    // #[test]
    // fn test_revoke_all() {
    //     let mut context = get_context(accounts(0));
    //     testing_env!(context.build());
    //     let mut contract = Contract::new_default_meta(accounts(0).into());

    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(MINT_STORAGE_COST)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     let token_id = "0".to_string();
    //     contract.nft_mint(token_id.clone(), accounts(0), sample_token_metadata());

    //     // alice approves bob
    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(150000000000000000000)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     contract.nft_approve(token_id.clone(), accounts(1), None);

    //     // alice revokes bob
    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .attached_deposit(1)
    //         .predecessor_account_id(accounts(0))
    //         .build());
    //     contract.nft_revoke_all(token_id.clone());
    //     testing_env!(context
    //         .storage_usage(env::storage_usage())
    //         .account_balance(env::account_balance())
    //         .is_view(true)
    //         .attached_deposit(0)
    //         .build());
    //     assert!(!contract.nft_is_approved(token_id.clone(), accounts(1), Some(1)));
    // }
}
