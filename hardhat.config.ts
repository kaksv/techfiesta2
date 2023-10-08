import "@nomicfoundation/hardhat-toolbox";
import { HardhatUserConfig } from "hardhat/config";
import * as dotenv from "dotenv"
dotenv.config();

const MUMBAI_RPC_URL = process.env.INFURA_MUMBAI_RPC;
const POLYGON_KEY = process.env.POLYGON_SCAN_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY || ''],
    },
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: [PRIVATE_KEY || ''], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
  
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGON_KEY || '',
    },
  },
};
export default config;
