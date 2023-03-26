// https://eth-goerli.g.alchemy.com/v2/wWsGPsRLhvx_fAGMZhUcounstaunW_xp
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/wWsGPsRLhvx_fAGMZhUcounstaunW_xp",
      accounts: [
        "005946c3b7c26f5ee8dc015448c66daa8eac4e6a148f5028c60f68dd2b621269",
      ],
    },
  },
};
