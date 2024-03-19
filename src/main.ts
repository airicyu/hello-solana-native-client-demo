import web3, {
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { devWallet } from "./load-dev-wallet.js";

const PROGRAM_ID = "<YOUR_PROGRAM_ID>";

console.log(`Program ID: ${PROGRAM_ID}`);

const connection: Connection = new Connection(clusterApiUrl("devnet"));

// Get latest blockhash info
const blockhashInfo = await connection.getLatestBlockhash();

// Create transaction
const tx = new web3.Transaction({
  ...blockhashInfo,
});

// Add our hello world program instruction
tx.add(
  new web3.TransactionInstruction({
    programId: new PublicKey(PROGRAM_ID),
    keys: [],
    data: Buffer.from([]),
  })
);

// Sign transaction
tx.sign(devWallet);

// // Send the transaction to the Solana cluster
const txHash = await connection.sendRawTransaction(tx.serialize());
console.log(`Transaction hash: ${txHash}`);
console.log(
  `View the transaction at: https://explorer.solana.com/tx/${txHash}?cluster=devnet`
);
