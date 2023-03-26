const { ethers } = require("ethers");
const hre = require("hardhat");

const deploy = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      await hre.ethers.provider.getBalance(transactions.address)
    )} ETH and Transactions timestamp ${
      transactions.deployTransaction.timestamp
    } deployed to ${transactions.address}`
  );
};

const runDeploy = async () => {
  try {
    await deploy();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runDeploy();
