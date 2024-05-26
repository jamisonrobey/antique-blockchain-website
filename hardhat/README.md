# Hardhat

This is the hardhat project used to develop our smart contracts.

You can find the contract code under `contracts/`

To run the tests locally:
 - `npm install`
 - `npx hardhat test`
 - This runs all tests on local hardhat network

To deploy contract to local Hardhat network outside of testing
 -` npx hardhat node`
 - `npx hardhat ignition deploy ./ignition/modules/AntiqueCertification.ts --network localhost`

To deploy to Sepolia
 - Email Jamison Robey for API keys (these aren't used so I don't mind sharing to QUT staff)
 - create environment variables `SEPOLIA_PRIVATE_KEY` `INFURA_API_KEY`
 -  - `npx hardhat ignition deploy ./ignition/modules/AntiqueCertification.ts --network sepolia`
