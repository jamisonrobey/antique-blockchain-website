import "dotenv/config";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    ganache: {
      // deploy to ganache network on 7545
      url: "http://localhost:7545",
    },
    // use hardhat in metamask browser
    hardhat: {
      accounts: {
        mnemonic: process.env.SEED_PHRASE?.trim(),
      },
      chainId: 1337,
    },

    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      // @ts-ignore
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
export default config;
