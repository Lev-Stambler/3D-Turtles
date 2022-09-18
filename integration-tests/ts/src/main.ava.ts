import {
  Worker,
  NearAccount,
  tGas,
  NEAR,
  BN,
  ChildProcessPromise,
} from "near-workspaces";
import anyTest, { TestFn } from "ava";
import { mint_more, nft_total_supply } from "./utils";

const DEFAULT_MAX_SUPPLY = 10;

const test = anyTest as TestFn<{
  worker: Worker;
  accounts: Record<string, NearAccount>;
}>;

test.beforeEach(async (t) => {
  const worker = await Worker.init();
  const root = worker.rootAccount;
  const nft = await root.devDeploy("../../res/non_fungible_token.wasm", {
    initialBalance: NEAR.parse("100 N").toJSON(),
    method: "new_default_meta",
    args: {},
  });
  await root.call(
    nft,
    "nft_mint",
    {
      r1: {
        n: 9,
        d: 19,
        b: 31,
      },
      r2: {
        n: 6,
        d: 18,
        b: 3,
      },
      thickness: 0.5,
      speed: 6,
      receiver_id: root.accountId,
    },
    { attachedDeposit: "80000000000000000000000" }
  );

  const alice = await root.createSubAccount("alice", {
    initialBalance: NEAR.parse("100 N").toJSON(),
  });

  const tokenReceiver = await root.devDeploy("../../res/token_receiver.wasm", {
    initialBalance: NEAR.parse("100 N").toJSON(),
    method: "new",
    args: { non_fungible_token_account_id: nft },
  });

  const approvalReceiver = await root.devDeploy(
    "../../res/approval_receiver.wasm",
    {
      initialBalance: NEAR.parse("100 N").toJSON(),
      method: "new",
      args: { non_fungible_token_account_id: nft },
    }
  );

  t.context.worker = worker;
  t.context.accounts = { root, alice, nft, tokenReceiver, approvalReceiver };
});

test.afterEach(async (t) => {
  await t.context.worker.tearDown().catch((error) => {
    console.log("Failed to tear down the worker:", error);
  });
});

test("Final treasury balance after buy", async (test) => {
  const { root, alice, nft, tokenReceiver } = test.context.accounts;
  const root_bal = (await root.balance()).available;
  await alice.call(
    nft,
    "nft_mint",
    {
      r1: {
        n: 5,
        d: 16,
        b: 3,
      },
      r2: {
        n: 6,
        d: 18,
        b: 3,
      },
      thickness: 0.5,
      speed: 6,
      receiver_id: "alice.near",
    },
    {
      attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
      gas: tGas("150"),
    }
  );

  const root_bal_final = (await root.balance()).available;
  test.assert(root_bal_final.sub(root_bal).toString() === "10");
});

test("Mint maximum number of tokens and then burn to mint one more. Then exceed max supply", async (test) => {
  const { root, alice, nft, tokenReceiver } = test.context.accounts;
  //   Subtract 1 to account for the mint in initialization
  for (let i = 0; i < DEFAULT_MAX_SUPPLY - 1; i++) {
    await alice.call(
      nft,
      "nft_mint",
      {
        r1: {
          n: i * 17,
          d: 1999,
          b: 3,
        },
        r2: {
          n: 6,
          d: 18,
          b: 3,
        },
        thickness: 0.5,
        speed: 6,
        receiver_id: alice.accountId,
      },
      {
        attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
        gas: tGas("150"),
      }
    );
  }

  await alice.call(
    nft,
    "burn_and_nft_mint",
    {
      burn_id: "2",
      r1: {
        n: 181,
        d: 999,
        b: 19,
      },
      r2: {
        n: 33,
        d: 111,
        b: 9,
      },
      thickness: 0.5,
      speed: 10,
      receiver_id: alice.accountId,
    },
    {
      attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
      gas: tGas("150"),
    }
  );
  try {
    await alice.call(
      nft,
      "nft_mint",
      {
        r1: {
          n: 19 * 17,
          d: 1999,
          b: 3,
        },
        r2: {
          n: 6,
          d: 18,
          b: 3,
        },
        thickness: 0.5,
        speed: 6,
        receiver_id: alice.accountId,
      },
      {
        attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
        gas: tGas("150"),
      }
    );
    test.assert(false, "Expected mint passed max supply to fail");
  } catch (e) {
    test.assert(true, "Mint pass max supply failed as it should");
  }
});

test("No double mint", async (test) => {
  const { root, alice, nft, tokenReceiver } = test.context.accounts;
  await alice.call(
    nft,
    "nft_mint",
    {
      burn_id: "1",
      r1: {
        n: 181,
        d: 999,
        b: 19,
      },
      r2: {
        n: 33,
        d: 111,
        b: 9,
      },
      thickness: 0.5,
      speed: 10,
      receiver_id: alice.accountId,
    },
    {
      attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
      gas: tGas("150"),
    }
  );
  try {
    await alice.call(
      nft,
      "nft_mint",
      {
        burn_id: "1",
        r1: {
          n: 181,
          d: 999,
          b: 19,
        },
        r2: {
          n: 33,
          d: 111,
          b: 9,
        },
        thickness: 0.5,
        speed: 10,
        receiver_id: alice.accountId,
      },
      {
        attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
        gas: tGas("150"),
      }
    );
    test.assert(false, "expected double mint to fail");
  } catch (e) {
    test.assert(true, "Double mint test passed");
  }
});

test("No burning someone else's token", async (test) => {
  const { root, alice, nft, tokenReceiver } = test.context.accounts;
  try {
    await alice.call(
      nft,
      "burn_and_nft_mint",
      {
        burn_id: "0",
        r1: {
          n: 181,
          d: 999,
          b: 19,
        },
        r2: {
          n: 33,
          d: 111,
          b: 9,
        },
        thickness: 0.5,
        speed: 10,
        receiver_id: alice.accountId,
      },
      {
        attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
        gas: tGas("150"),
      }
    );
    test.assert(false, "expected double mint to fail");
  } catch (e) {
    test.assert(true, "Double mint failed as expected");
  }
});

test("Underpaying attached deposit", async (test) => {
  const { root, alice, nft, tokenReceiver } = test.context.accounts;
  try {
    await alice.call(
      nft,
      "nft_mint",
      {
        r1: {
          n: 181,
          d: 999,
          b: 19,
        },
        r2: {
          n: 33,
          d: 111,
          b: 9,
        },
        thickness: 0.5,
        speed: 10,
        receiver_id: alice.accountId,
      },
      {
        attachedDeposit: new BN("2000000"), // need more deposit than the sim-tests, cause names are longer
        gas: tGas("150"),
      }
    );
    test.assert(false, "expected under attach fail");
  } catch (e) {
    test.assert(true, "Under depositing tokens failed as expected");
  }
});


/*


async fn test_underpay(
    owner: &Account,
    user: &Account,
    nft_contract: &Contract,
    worker: &Worker<Sandbox>,
) -> anyhow::Result<()> {
    todo!();
}

*/

test("Simple approve", async (test) => {
  const { root, alice, nft, tokenReceiver } = test.context.accounts;
  // root approves alice
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: alice,
    },
    {
      attachedDeposit: new BN("270000000000000000000"), // need more deposit than the sim-tests, cause names are longer
      gas: tGas("150"),
    }
  );

  // check nft_is_approved, don't provide approval_id
  test.assert(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: alice,
    })
  );

  // check nft_is_approved, with approval_id=1
  test.assert(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: alice,
      approval_id: 1,
    })
  );

  // check nft_is_approved, with approval_id=2
  test.false(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: alice,
      approval_id: 2,
    })
  );

  // alternatively, one could check the data returned by nft_token
  const token: any = await nft.view("nft_token", { token_id: "0" });
  test.deepEqual(token.approved_account_ids, { [alice.accountId]: 1 });

  // root approves alice again, which changes the approval_id and doesn't require as much deposit
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: alice,
    },
    { attachedDeposit: "1", gas: tGas("150") }
  );

  test.true(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: alice,
      approval_id: 2,
    })
  );

  // approving another account gives different approval_id
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: tokenReceiver,
    },
    // note that token_receiver's account name is longer, and so takes more bytes to store and
    // therefore requires a larger deposit!
    { attachedDeposit: new BN("360000000000000000000"), gas: tGas("150") }
  );

  test.true(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: tokenReceiver,
      approval_id: 3,
    })
  );
});

test("Approval with call", async (test) => {
  const { root, nft, approvalReceiver } = test.context.accounts;
  let outcome: string = await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: approvalReceiver,
      msg: "return-now",
    },
    { attachedDeposit: new BN("390000000000000000000"), gas: tGas("150") }
  );

  test.is(outcome, "cool");

  const msg = "hahaha";
  outcome = await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: approvalReceiver,
      msg: msg,
    },
    { attachedDeposit: new BN("390000000000000000000"), gas: tGas("150") }
  );
  test.is(outcome, msg);
});

test("Approved account transfers token", async (test) => {
  const { root, alice, nft } = test.context.accounts;
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: alice,
    },
    { attachedDeposit: new BN("270000000000000000000"), gas: tGas("150") }
  );

  await alice.call(
    nft,
    "nft_transfer",
    {
      receiver_id: alice,
      token_id: "0",
      approval_id: 1,
      memo: "gotcha! bahahaha",
    },
    { attachedDeposit: "1", gas: tGas("150") }
  );

  const token: any = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, alice.accountId);
});

test("Revoke", async (test) => {
  const { root, alice, tokenReceiver, nft } = test.context.accounts;
  // root approves alice
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: alice,
    },
    { attachedDeposit: new BN("270000000000000000000"), gas: tGas("150") }
  );

  // root approves token_receiver
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: tokenReceiver,
    },
    { attachedDeposit: new BN("360000000000000000000"), gas: tGas("150") }
  );

  // root revokes alice
  await root.call(
    nft,
    "nft_revoke",
    { token_id: "0", account_id: alice },
    { attachedDeposit: "1" }
  );

  // alice is revoked...
  test.false(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: alice,
    })
  );

  // but token_receiver is still approved
  test.true(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: tokenReceiver,
    })
  );

  // root revokes token_receiver
  await root.call(
    nft,
    "nft_revoke",
    { token_id: "0", account_id: tokenReceiver },
    { attachedDeposit: "1" }
  );

  // alice is still revoked...
  test.false(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: alice,
    })
  );

  // ...and now so is token_receiver
  test.false(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: tokenReceiver,
    })
  );
});

test("Revoke all", async (test) => {
  const { root, alice, tokenReceiver, nft } = test.context.accounts;
  // root approves alice
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: alice,
    },
    { attachedDeposit: new BN("270000000000000000000"), gas: tGas("150") }
  );

  // root approves token_receiver
  await root.call(
    nft,
    "nft_approve",
    {
      token_id: "0",
      account_id: tokenReceiver,
    },
    { attachedDeposit: new BN("360000000000000000000"), gas: tGas("150") }
  );

  await root.call(
    nft,
    "nft_revoke_all",
    { token_id: "0" },
    { attachedDeposit: "1" }
  );

  // everyone revoked...
  test.false(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: alice,
    })
  );
  test.false(
    await nft.view("nft_is_approved", {
      token_id: "0",
      approved_account_id: tokenReceiver,
    })
  );
});

test("Simple transfer", async (test) => {
  const { root, alice, nft } = test.context.accounts;
  let token: any = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, root.accountId);

  const result = await root.callRaw(
    nft,
    "nft_transfer",
    {
      receiver_id: alice,
      token_id: "0",
      memo: "simple transfer",
    },
    { attachedDeposit: "1" }
  );
  test.assert(result.succeeded);
  token = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, alice.accountId);
});

test("Transfer call fast return to sender", async (test) => {
  const { root, tokenReceiver, nft } = test.context.accounts;
  await root.call(
    nft,
    "nft_transfer_call",
    {
      receiver_id: tokenReceiver,
      token_id: "0",
      memo: "transfer & call",
      msg: "return-it-now",
    },
    { attachedDeposit: "1", gas: tGas(150) }
  );

  const token: any = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, root.accountId);
});

test("Transfer call slow return to sender", async (test) => {
  const { root, tokenReceiver, nft } = test.context.accounts;
  await root.call(
    nft,
    "nft_transfer_call",
    {
      receiver_id: tokenReceiver,
      token_id: "0",
      memo: "transfer & call",
      msg: "return-it-later",
    },
    { attachedDeposit: "1", gas: tGas(150) }
  );

  const token: any = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, root.accountId);
});

test("Transfer call fast keep with sender", async (test) => {
  const { root, tokenReceiver, nft } = test.context.accounts;
  await root.call(
    nft,
    "nft_transfer_call",
    {
      receiver_id: tokenReceiver,
      token_id: "0",
      memo: "transfer & call",
      msg: "keep-it-now",
    },
    { attachedDeposit: "1", gas: tGas(150) }
  );
  const token: any = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, tokenReceiver.accountId);
});

test("Transfer call slow keep with sender", async (test) => {
  const { root, tokenReceiver, nft } = test.context.accounts;
  await root.call(
    nft,
    "nft_transfer_call",
    {
      receiver_id: tokenReceiver,
      token_id: "0",
      approval_id: null,
      memo: "transfer & call",
      msg: "keep-it-later",
    },
    { attachedDeposit: "1", gas: tGas(150) }
  );
  const token: any = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, tokenReceiver.accountId);
});

test("Transfer call receiver panics", async (test) => {
  const { root, tokenReceiver, nft } = test.context.accounts;
  await root.call(
    nft,
    "nft_transfer_call",
    {
      receiver_id: tokenReceiver,
      token_id: "0",
      approval_id: null,
      memo: "transfer & call",
      msg: "incorrect message",
    },
    { attachedDeposit: "1", gas: tGas(150) }
  );
  const token: any = await nft.view("nft_token", { token_id: "0" });
  test.is(token.owner_id, root.accountId);
});

test("Enum total supply", async (test) => {
  const { root, alice, nft } = test.context.accounts;
  await mint_more(root, nft);

  const total_supply = await nft_total_supply(nft, alice);
  test.deepEqual(total_supply, new BN(4));
});

test("Enum nft tokens", async (test) => {
  const { root, nft } = test.context.accounts;
  await mint_more(root, nft);

  // No optional args should return all
  let tokens: any[] = await nft.view("nft_tokens");
  test.is(tokens.length, 4);

  // Start at "1", with no limit arg
  tokens = await nft.view("nft_tokens", { from_index: "1" });
  test.is(tokens.length, 3);
  test.is(tokens[0].token_id, "1");
  test.is(tokens[1].token_id, "2");
  test.is(tokens[2].token_id, "3");

  // Start at "2", with limit 1
  tokens = await nft.view("nft_tokens", { from_index: "2", limit: 1 });
  test.is(tokens.length, 1);
  test.is(tokens[0].token_id, "2");

  // Don't specify from_index, but limit 2
  tokens = await nft.view("nft_tokens", { limit: 2 });
  test.is(tokens.length, 2);
  test.is(tokens[0].token_id, "0");
  test.is(tokens[1].token_id, "1");
});

test("Enum nft supply for owner", async (test) => {
  const { root, alice, nft } = test.context.accounts;
  // Get number from account with no NFTs
  let ownerNumTokens: BN = new BN(
    await nft.view("nft_supply_for_owner", { account_id: alice })
  );
  test.deepEqual(ownerNumTokens, new BN(0));

  ownerNumTokens = new BN(
    await nft.view("nft_supply_for_owner", { account_id: root })
  );
  test.deepEqual(ownerNumTokens, new BN(1));

  await mint_more(root, nft);

  ownerNumTokens = new BN(
    await nft.view("nft_supply_for_owner", { account_id: root })
  );
  test.deepEqual(ownerNumTokens, new BN(4));
});

test("Enum nft tokens for owner", async (test) => {
  const { root, alice, nft } = test.context.accounts;
  await mint_more(root, nft);

  // Get tokens from account with no NFTs
  let ownerTokens: any[] = await nft.view("nft_tokens_for_owner", {
    account_id: alice,
  });
  test.deepEqual(ownerTokens.length, 0);

  // Get tokens with no optional args
  ownerTokens = await nft.view("nft_tokens_for_owner", { account_id: root });
  test.deepEqual(ownerTokens.length, 4);

  // With from_index and no limit
  ownerTokens = await nft.view("nft_tokens_for_owner", {
    account_id: root,
    from_index: new BN(2),
  });
  test.deepEqual(ownerTokens.length, 2);
  test.is(ownerTokens[0].token_id, "2");
  test.is(ownerTokens[1].token_id, "3");

  // With from_index and limit 1
  ownerTokens = await nft.view("nft_tokens_for_owner", {
    account_id: root,
    from_index: new BN(1),
    limit: 1,
  });
  test.deepEqual(ownerTokens.length, 1);
  test.is(ownerTokens[0].token_id, "1");

  // No from_index but limit 3
  ownerTokens = await nft.view("nft_tokens_for_owner", {
    account_id: root,
    limit: 3,
  });
  test.deepEqual(ownerTokens.length, 3);
  test.is(ownerTokens[0].token_id, "0");
  test.is(ownerTokens[1].token_id, "1");
  test.is(ownerTokens[2].token_id, "2");
});
