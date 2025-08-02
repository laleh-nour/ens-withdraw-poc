# ENS ETHRegistrarController PoC

## Description
Proof-of-concept demonstrating a missing access control in the `withdraw()` function of the ETHRegistrarController contract (address: `0x253553366Da8546fC250F225fe3d25d0C782303b`).

## Files
- `abi/ETHRegistrarController.abi.json`
- `scripts/poc-withdraw.js`

## Usage
```bash
npm install
npx hardhat node
npx hardhat run scripts/poc-withdraw.js --network localhost
