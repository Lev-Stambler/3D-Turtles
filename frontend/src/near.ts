// import "near-api-js/dist/near-api-js";
import type { Contract, Near, utils } from "near-api-js";
import { writable, type Writable } from "svelte/store";
import { CONTRACT_NAME, getConfig } from "./config";
import type { Rational } from "./interfaces";
import { setCurrentRationals } from "./turtle_utils";

//@ts-ignore
const nearAPI = window.nearApi;

export interface Token {
  token_id: string;
  owner_id: string;
  metadata: {
    media: string;
    title: string;
  };
}

// create a keyStore for signing transactions using the user's key
// which is located in the browser local storage after user logs in
let keyStore;
const env = "mainnet";

let nearConfig;

export const near: Writable<Near | null> = writable(null);

export const setNear = async () => {
  console.log(nearAPI, nearAPI.keyStores);
  keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
  nearConfig = {
    keyStore,
    ...getConfig(env),
  };
  const _near = await nearAPI.connect(nearConfig);
  near.set(_near);
};

export const getWalletConnection = (near: Near) => {
  return new nearAPI.WalletConnection(near, "3D Turtle");
};
// Initializing connection to the NEAR testnet
// const near =

const getContract = (near: Near): Contract => {
  const account = getWalletConnection(near).account();
  const contract = new nearAPI.Contract(account, CONTRACT_NAME, {
    // name of contract you're connecting to
    viewMethods: ["nft_minted", "nft_tokens_for_owner", "nft_tokens"], // view methods do not change state but usually return a value
    changeMethods: ["nft_mint"], // change methods modify state
  });
  return contract;
};

const MINT_AMOUNT = 6000000000000000000000000;

export const mint = async (
  near: Near,
  r1: Rational,
  r2: Rational,
  thickness: number,
  speed: number
): Promise<void> => {
  setCurrentRationals(r1, r2, { n: 8, d: 9, b: 10 });
  //@ts-ignore
  await getContract(near).nft_mint(
    {
      r1,
      r2,
      receiver_id: getWalletConnection(near).getAccountId(),
      thickness,
      speed,
    },
    "300000000000000", // attached GAS (optional)
    (
      BigInt(MINT_AMOUNT) + BigInt(nearAPI.utils.format.parseNearAmount("0.1"))
    ).toString()
  );
};

export const tokensByAccount = async (
  near,
  account: string
): Promise<Token[]> => {
  //@ts-ignore
  const contract = getContract(near);
  //@ts-ignore
  const tokens: Token[] = await contract.nft_tokens_for_owner({
    account_id: account,
  });
  return tokens;
};

export const getAllTokens = async (near): Promise<Token[]> => {
  //@ts-ignore
  const contract = getContract(near);
  //@ts-ignore
  const tokens: Token[] = await contract.nft_tokens({});
  return tokens;
};

export const checkMinted = async (
  r1: Rational,
  r2: Rational
): Promise<boolean> => {
  //@ts-ignore
  const response = await getContract(near).nft_minted({
    r1,
    r2,
  });
  return response;
};

export const signIn = (near: Near, r1: Rational, r2: Rational) => {
  setCurrentRationals(r1, r2, { n: 8, d: 9, b: 10 });
  getWalletConnection(near).requestSignIn({
    contractId: nearConfig.contractName,
  });
  // TODO: method names
};

export const signOut = (near: Near) => {
  getWalletConnection(near).signOut();
  window.location.reload();
};
