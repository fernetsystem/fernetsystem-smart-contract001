const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['01df474fe634b34c000e4cf300860d6234ccb59f49b3e40e258a87a68a2825ed'],
  providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
})

module.exports = {
  networks: {
    binanceTestnet: {
      provider: () => provider,
      network_id: "97",
      gas: 1000000
    },
    develop: {
      port: 8545
    }
  }
};