import { Keypair } from "@solana/web3.js";
import * as fs from "fs";

const devWalletKeyPair = JSON.parse(
  fs.readFileSync("./src/dev-wallet-keypair.json", { encoding: "utf8" })
);
const devWalletPrivateKey = Uint8Array.from(devWalletKeyPair.slice(0, 32));
export const devWallet = Keypair.fromSeed(devWalletPrivateKey);
