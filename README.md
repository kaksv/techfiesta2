# TechFiesta Swisstronik challenge

Create a smart contract with a single private state variable (string or uint) and develop functions to modify and retrieve this value. Deploy the contract to the Mumbai testnet and Swisstronik testnet, and write a script to access this variable using the RPC method eth_getStorageAt() on both networks. 

Introduction
Smart Contract for swisstronik deployed at 0X6C8Ded533552469178d07462ada7cE3336BD47Bc
Smart Contract for mumbai deployed at 0xDC33C4C91d4a64ea7d33e865396a3e2A91C5e69A

# deploy contracts with:
npx hardhat run scripts/deploy.ts --network swisstronik
npx hardhat run scripts/deploy.ts --network mumbai

Call provider.getStorageAt()

npx hardhat run scripts/getStorageAt.ts                                  
Console Log


Getting Message from Swisstronik:
BYTES:  0xc73...
string
false

Getting Message from Mumbai:
BYTES:  0x0...0
string
false


# setup
npm init --yes
npm install --save-dev @nomicfoundation/hardhat-toolbox
npx hardhat
npm i @swisstronik/swisstronik.js
npx hardhat compile
npx hardhat run scripts/deploy.ts
npx hardhat run scripts/getStorageAt.ts
```
