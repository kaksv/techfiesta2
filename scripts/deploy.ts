const hre = require("hardhat");



async function main() {
  const contract = await hre.ethers.deployContract("TechFiesta", ["Hello TechFiesta"]);

  await contract.waitForDeployment();

  console.log(`Techfiesta contract deployed to address ${contract.target}`);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});