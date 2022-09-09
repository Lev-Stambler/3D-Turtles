use std::convert::TryFrom;

use crate::utils::{helper_mint, init};
use near_contract_standards::non_fungible_token::Token;
use near_sdk::{
    env,
    json_types::{ValidAccountId, U128},
};
use near_sdk_sim::{
    call,
    transaction::{ExecutionOutcome, ExecutionStatus},
    view, ContractAccount, UserAccount,
};
use non_fungible_token::{
    ContractContract as NftContract, Rational, DEFAULT_MAX_SUPPLY, DEFAULT_MINT_PRICE,
};

#[test]
fn simulate_test_final_balance() {
    let (root, nft, alice, _, _) = init();

    let r1 = Rational { n: 1, d: 2, b: 3 };
    let r2 = Rational { n: 2, d: 3, b: 4 };
    let init_storage_usage: u64 = view!(nft.get_storage_usage()).unwrap_json();
    let bal_init = alice.account().unwrap().amount;
    let root_bal_init = root.account().unwrap().amount;

    let call_ret = call!(
        alice,
        nft.nft_mint(r1.clone(), r2.clone(), 0.5f32, 2, alice.valid_account_id()),
        70000000000000000000000, // deposit
        300000000000000          // gas
    );
    let _: Vec<()> = call_ret
        .promise_results()
        .iter()
        .map(|p| {
            let p_r = p.as_ref().unwrap();
            p_r.assert_success();
            ()
        })
        .collect();

    let final_storage_usage: u64 = view!(nft.get_storage_usage()).unwrap_json();
    let storage_cost =
        (final_storage_usage - init_storage_usage) as u128 * env::storage_byte_cost();
    let bal_final = alice.account().unwrap().amount;

    // TODO: why is this happening!!!!
    // assert!(
    //     bal_init - bal_final - (8547596185626000000010 - 7520000000000000000010)
    //         <= storage_cost + DEFAULT_MINT_PRICE
    //         && bal_init - bal_final >= storage_cost + DEFAULT_MINT_PRICE
    // );
    let root_bal_final = root.account().unwrap().amount;
    assert!(root_bal_final - root_bal_init >= DEFAULT_MINT_PRICE);
}

#[test]
fn simulate_test_burn() {
    // Mints 1 token automatically
    let (root, nft, _, _, _) = init();

    // Mint the remaining
    for i in 0..(DEFAULT_MAX_SUPPLY - 1) {
        let r1 = Rational { n: 1, d: 2, b: 3 };
        let r2 = Rational {
            n: i + 10,
            d: 3,
            b: 41,
        };

        call!(
            root,
            nft.nft_mint(r1.clone(), r2.clone(), 0.5f32, 2, root.valid_account_id()),
            deposit = 70000000000000000000000
        )
        .assert_success();
    }
    let owner_num_tokens: U128 =
        view!(nft.nft_supply_for_owner(root.valid_account_id())).unwrap_json();
    assert_eq!(owner_num_tokens.0, DEFAULT_MAX_SUPPLY.into());
    let circulating_supply: u32 = view!(nft.get_circulating_supply()).unwrap_json();
    assert_eq!(owner_num_tokens.0, circulating_supply.into());

    let burn_tok_id = "1".to_string();
    call!(
        root,
        nft.burn_and_nft_mint(
            burn_tok_id.to_string(),
            Rational {
                n: 12,
                d: 39,
                b: 99
            },
            Rational {
                n: 11,
                d: 39,
                b: 99
            },
            0.5f32,
            5,
            root.valid_account_id()
        ),
        deposit = 70000000000000000000000
    );

    let owner_num_tokens: U128 =
        view!(nft.nft_supply_for_owner(root.valid_account_id())).unwrap_json();
    assert_eq!(owner_num_tokens.0, DEFAULT_MAX_SUPPLY.into());
    let circulating_supply: u32 = view!(nft.get_circulating_supply()).unwrap_json();
    assert_eq!(owner_num_tokens.0, circulating_supply.into());

    let burn_supply: U128 =
        view!(nft.nft_supply_for_owner(ValidAccountId::try_from("system".to_string()).unwrap()))
            .unwrap_json();
    assert_eq!(burn_supply.0, 1);
}

#[test]
fn simulate_test_double_no_mint() {
    let (root, nft, _, _, _) = init();

    let r1 = Rational { n: 1, d: 2, b: 3 };
    let r2 = Rational { n: 2, d: 3, b: 4 };

    let r1_clone = r1.clone();
    let r2_clone = r2.clone();
    call!(
        &root,
        nft.nft_mint(r1_clone, r2_clone, 0.5f32, 2, root.valid_account_id()),
        deposit = 70000000000000000000000
    )
    .assert_success();
    let r1_clone = r1.clone();
    let r2_clone = r2.clone();
    let outcome = call!(
        &root,
        nft.nft_mint(r1_clone, r2_clone, 0.5f32, 2, root.valid_account_id()),
        deposit = 70000000000000000000000
    )
    .outcome()
    .status
    .clone();
    if let ExecutionStatus::Failure(_) = outcome {
    } else {
        assert!(false, "Expected failure");
    }
}

#[test]
fn simulate_test_no_burn_others() {
    let (root, nft, alice, _, _) = init();

    let r1 = Rational { n: 1, d: 2, b: 3 };
    let r2 = Rational { n: 2, d: 3, b: 4 };

    let r1_clone = r1.clone();
    let r2_clone = r2.clone();
    call!(
        &root,
        nft.nft_mint(r1_clone, r2_clone, 0.5f32, 2, root.valid_account_id()),
        deposit = 70000000000000000000000
    )
    .assert_success();

    let mut r1_clone = r1.clone();
    r1_clone.n = 3;
    let r2_clone = r2.clone();
    let outcome = call!(
        &alice,
        nft.burn_and_nft_mint(
            "1".to_string(),
            r1_clone,
            r2_clone,
            0.5f32,
            2,
            root.valid_account_id()
        ),
        deposit = 70000000000000000000000
    )
    .outcome()
    .status
    .clone();
    if let ExecutionStatus::Failure(_) = outcome {
    } else {
        assert!(false, "Expected failure");
    }
}

#[test]
fn simulate_test_max_supply() {
    // Mints 1
    let (root, nft, _, _, _) = init();

    // Mints max - 1
    for i in 1..(DEFAULT_MAX_SUPPLY) {
        let r1 = Rational { n: 1, d: 2, b: 3 };
        let r2 = Rational { n: i, d: 173, b: 4 };

        call!(
            root,
            nft.nft_mint(r1.clone(), r2.clone(), 0.5f32, 2, root.valid_account_id()),
            deposit = 70000000000000000000000
        )
        .assert_success();
    }
    let r1 = Rational { n: 1, d: 2, b: 3 };
    let r2 = Rational {
        n: 27,
        d: 173,
        b: 4,
    };

    let outcome = call!(
        root,
        nft.nft_mint(r1.clone(), r2.clone(), 0.5f32, 2, root.valid_account_id()),
        deposit = 70000000000000000000000
    )
    .outcome()
    .status
    .clone();
    if let ExecutionStatus::Failure(_) = outcome {
    } else {
        assert!(false, "Expected failure");
    }
}

#[test]
fn simulate_test_underpay() {
    let (root, nft, _, _, _) = init();

    let r1 = Rational { n: 1, d: 2, b: 3 };
    let r2 = Rational { n: 2, d: 3, b: 4 };

    let r1_clone = r1.clone();
    let r2_clone = r2.clone();
    let outcome = call!(
        &root,
        nft.nft_mint(r1_clone, r2_clone, 0.5f32, 2, root.valid_account_id()),
        deposit = 100
    )
    .outcome()
    .status
    .clone();
    if let ExecutionStatus::Failure(_) = outcome {
    } else {
        assert!(false, "Expected failure");
    }
}
