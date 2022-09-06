import "near-api-js/dist/near-api-js";
import type { Contract, Near, utils } from "near-api-js";
import { writable, type Writable } from "svelte/store";
import { CONTRACT_NAME, getConfig } from "./config";
import type { Rational } from "./interfaces";

//@ts-ignore
const nearAPI = window.nearApi

// create a keyStore for signing transactions using the user's key
// which is located in the browser local storage after user logs in
let keyStore;
const env = "testnet";

let nearConfig;

export const near: Writable<Near | null> = writable(null);

export const setNear = async () => {
  console.log(nearAPI, nearAPI.keyStores)
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
    viewMethods: ["nft_minted"], // view methods do not change state but usually return a value
    changeMethods: ["nft_mint"], // change methods modify state
  });
  return contract;
};

const MINT_AMOUNT = 10;

export const mint = async (
  near: Near,
  r1: Rational,
  r2: Rational,
  thickness: number,
  speed: number
): Promise<void> => {
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

export const signIn = (near: Near) => {
  getWalletConnection(near).requestSignIn({
    contractId: nearConfig.contractName,
  });
  // TODO: method names
};

export const signOut = (near: Near) => {
  getWalletConnection(near).signOut();
  window.location.reload();
};
