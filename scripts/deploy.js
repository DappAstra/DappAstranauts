const hre = require("hardhat");

async function main() {
  const NAME = 'DappAstranauts'
  const SYMBOL = 'DANS'
  const COST = ethers.utils.parseUnits('10', 'ether')
  const MAX_SUPPLY = 10
  const ALLOW_MINTING_ON = (Date.now()).toString().slice(0,10)
  const BASE_URI = 'ipfs://QmeZMYBYFbx8NA3fiUBfdgLqYXE1w4WuwvtGwSLa3SdGBV/'
  
  const NFT = await ethers.getContractFactory('NFT')
  nft = await NFT.deploy(NAME, SYMBOL, COST, MAX_SUPPLY, ALLOW_MINTING_ON, BASE_URI)

  await nft.deployed()
  console.log(`NFT deployed to: ${nft.address}\n`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
