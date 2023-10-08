import { ethers } from "ethers";

const hre = require("hardhat");
const swisstronic_RPC = "https://json-rpc.testnet.swisstronik.com/";
const polygonMumbai_RPC = "https://polygon-mumbai.infura.io/v3/197cf23745d64339aea08f173a24eb76";

const getStorage = async (rpcURL: string, contractAddress: string, storeIndex: number) => {
    const provider: any = ethers.getDefaultProvider(rpcURL);

    try{
        const storageValue = await provider.getStorage(contractAddress, storeIndex);
        console.log(`Hex = `, storageValue );
        // Remove '0x' from the start
        const storageText = Buffer.from(storageValue.slice(2), 'hex').toString();
        console.log(`I am here to say, ${storageText}`)
    } catch(error){
        console.error("Error", error);
    }
};

async function main() {
    const swissAddressDeployedAt = "0X6C8Ded533552469178d07462ada7cE3336BD47Bc";
    const mumbaiAddressDeployedAt = "0xDC33C4C91d4a64ea7d33e865396a3e2A91C5e69A";
    const storageIndex = 0;
    const rpcUrl = hre.network.config.url;

    if(rpcUrl == swisstronic_RPC){
        await getStorage(rpcUrl, swissAddressDeployedAt, storageIndex);

    }else if(rpcUrl == polygonMumbai_RPC) {
        await getStorage(rpcUrl, mumbaiAddressDeployedAt, storageIndex)
    }else {
        return 'Error is found'
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
