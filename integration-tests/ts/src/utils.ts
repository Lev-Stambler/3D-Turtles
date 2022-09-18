import { NearAccount, BN, tGas } from "near-workspaces";

export async function helper_mint(
  token_id: string,
  root: NearAccount,
  nft: NearAccount,
  title: String,
  desc: String
) {
  await root.call(
    nft,
    "nft_mint",
    {
      r1: {
        n: parseInt(token_id),
        d: 69,
        b: 31,
      },
      r2: {
        n: 6,
        d: 18,
        b: 31,
      },
      thickness: 0.5,
      speed: 6,
      receiver_id: root.accountId,
    },
    {
      attachedDeposit: new BN("200700000000000000000000"), // need more deposit than the sim-tests, cause names are longer
      gas: tGas("150"),
    }
  );
}
export async function mint_more(root: NearAccount, nft: NearAccount) {
  await helper_mint("1", root, nft, "Black as the Night", "In charcoal");
  await helper_mint("2", root, nft, "Hamakua", "Vintage recording");
  await helper_mint("3", root, nft, "Aloha ke akua", "Original with piano");
}

export async function nft_total_supply(
  nft: NearAccount,
  user: NearAccount
): Promise<BN> {
  return new BN(await nft.view("nft_total_supply"));
}
