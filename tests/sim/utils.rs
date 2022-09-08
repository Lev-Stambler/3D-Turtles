use approval_receiver::ApprovalReceiverContract;
use non_fungible_token::ContractContract as NftContract;
use non_fungible_token::Rational;
use token_receiver::TokenReceiverContract;

use near_sdk_sim::{call, deploy, init_simulator, to_yocto, ContractAccount, UserAccount};

// Load in contract bytes at runtime
near_sdk_sim::lazy_static_include::lazy_static_include_bytes! {
    NFT_WASM_BYTES => "res/non_fungible_token.wasm",
    TOKEN_RECEIVER_WASM_BYTES => "res/token_receiver.wasm",
    APPROVAL_RECEIVER_WASM_BYTES => "res/approval_receiver.wasm",
}

const NFT_ID: &str = "nft";
const TOKEN_RECEIVER_ID: &str = "token-receiver";
const APPROVAL_RECEIVER_ID: &str = "approval-receiver";

// TODO: how to export String instead of &str? Way too much `into`/`to_string` with &str.
pub const TOKEN_ID: &str = "0";

/// Initialize simulator and return:
/// * root: the root user, set as owner_id for NFT contract, owns a token with ID=1
/// * nft: the NFT contract, callable with `call!` and `view!`
/// * alice: a user account, does not yet own any tokens
/// * token_receiver: a contract implementing `nft_on_transfer` for use with `transfer_and_call`
pub fn init() -> (
    UserAccount,
    ContractAccount<NftContract>,
    UserAccount,
    ContractAccount<TokenReceiverContract>,
    ContractAccount<ApprovalReceiverContract>,
) {
    let root = init_simulator(None);
    // uses default values for deposit and gas
    let nft = deploy!(
        // Contract Proxy
        contract: NftContract,
        // Contract account id
        contract_id: NFT_ID,
        // Bytes of contract
        bytes: &NFT_WASM_BYTES,
        // User deploying the contract,
        signer_account: root,
        // init method
        init_method: new_default_meta()
    );

    call!(
        root,
        nft.nft_mint(
            Rational {
                n: 10,
                d: 11,
                b: 14,
            },
            Rational {
                n: 10,
                d: 11,
                b: 13,
            },
            0.5f32,
            10,
            root.valid_account_id()
        ),
        deposit = 70000000000000000000000
    );

    let alice = root.create_user("alice".to_string(), to_yocto("100"));

    let token_receiver = deploy!(
        contract: TokenReceiverContract,
        contract_id: TOKEN_RECEIVER_ID,
        bytes: &TOKEN_RECEIVER_WASM_BYTES,
        signer_account: root,
        init_method: new(
            nft.valid_account_id()
        )
    );

    let approval_receiver = deploy!(
        contract: ApprovalReceiverContract,
        contract_id: APPROVAL_RECEIVER_ID,
        bytes: &APPROVAL_RECEIVER_WASM_BYTES,
        signer_account: root,
        init_method: new(
            nft.valid_account_id()
        )
    );

    (root, nft, alice, token_receiver, approval_receiver)
}

pub fn helper_mint(
    r1: Rational,
    r2: Rational,
    caller: &UserAccount,
    nft: &ContractAccount<NftContract>,
    thickness: f32,
    speed: u16,
) {
    call!(
        caller,
        nft.nft_mint(r1, r2, thickness, speed, caller.valid_account_id()),
        deposit = 7000000000000000000000
    );
}
