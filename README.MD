# Hello Solana Native Client Demo

## Setup

1) Assume you already have installed NodeJS v20+

2) Run `npm i` to install dependencies.

3) Copy your DEV wallet keypair json to the path `<PROJECT ROOT DIR>/src/dev-wallet-keypair.json`

4) Update the program ID at line `const PROGRAM_ID = "<YOUR_PROGRAM_ID>";`

## Run it

`npm start`

## What to expect?

Like the tutorial do:
- We load the dev wallet.
- We submit transaction to call the hello program.
- We can view the transaction on explorer.