# GROUP 12 - Jamison and Lara
# This is the repository for IFB452 - Assignment 3
### Live: [AntiqueChain](https://antique-blockchain-website.vercel.app/)

### Notes for tutor / marker

frontend and hardhat directories contain additional readmes with more detailed instructions

#### Frontend
You cannot run the frontend locally without secret environment variables.
 - To test out the frontend code, please visit our live deployment instead.
 - The following seed phrase will give you access to the admin's accout in MetaMask
   -   *REPLACE WHEN HOME*

#### Solidity / Backend

The solidity code for the project is in the `hardhat/` directory.
It contains various tests, deploy scripts and the original Contract Code under the file path: `hardhat/contracts/AntiqueCertification.sol`
You can run the tests on your machine simply clone this repository and:

```bash
cd hardhats
npx hardhat test
```

You can also deploy the contracts locally, you will need to comment out the `sepolia` and `localhost` network in the configuration, or provide your own Sepolia private key.
 - If commented out then the contracts still deploy to local network just without Sepolia account

To dpeloy:
```
npx hardhat ignition deploy ignition/modules/AntiqueCertificationLocal.ts
```
