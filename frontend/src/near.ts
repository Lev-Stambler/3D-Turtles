import * as nearAPI from "near-api-js";
import { Contract, utils } from "near-api-js";
import { CONTRACT_NAME, getConfig } from "./config";
import type { Rational } from "./interfaces";

// create a keyStore for signing transactions using the user's key
// which is located in the browser local storage after user logs in
const keyStore = new nearAPI.keyStores.BrowserLocalStorageKeyStore();
const env = "testnet";

const nearConfig = {
  keyStore,
  ...getConfig(env),
};

// Initializing connection to the NEAR testnet
const near = await nearAPI.connect(nearConfig);

// Initialize wallet connection
export const walletConnection = new nearAPI.WalletConnection(near, null);

const getContract = (): nearAPI.Contract => {
  const account = walletConnection.account();
  const contract = new Contract(account, CONTRACT_NAME, {
    // name of contract you're connecting to
    viewMethods: ["nft_minted"], // view methods do not change state but usually return a value
    changeMethods: ["nft_mint"], // change methods modify state
  });
  return contract;
};

const MINT_AMOUNT = 10;

export const mint = async (
  r1: Rational,
  r2: Rational,
  thickness: number,
  speed: number
): Promise<void> => {
  //@ts-ignore
  await getContract().nft_mint(
    {
      r1,
      r2,
      receiver_id: walletConnection.getAccountId(),
      thickness,
      speed,
    },
    "300000000000000", // attached GAS (optional)
    (
      BigInt(MINT_AMOUNT) + BigInt(utils.format.parseNearAmount("0.1"))
    ).toString()
  );
};

export const checkMinted = async (
  r1: Rational,
  r2: Rational
): Promise<boolean> => {
  //@ts-ignore
  const response = await getContract().nft_minted({
    r1,
    r2,
  });
  return response;
};

export const signIn = () => {
  walletConnection.requestSignIn({
    contractId: nearConfig.contractName,
  });
  // TODO: method names
};

export const signOut = () => {
  walletConnection.signOut();
  window.location.reload();
};
