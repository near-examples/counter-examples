const contractPerNetwork = {
  testnet: 'counter.near-examples.testnet',
};

export const NetworkId = 'testnet';
export const CounterContract = contractPerNetwork[NetworkId];

// Chains for EVM Wallets
const evmWalletChains = {
  mainnet: {
    chainId: 397,
    name: 'Near Mainnet',
    explorer: 'https://eth-explorer.near.org',
    rpc: 'https://eth-rpc.mainnet.near.org',
  },
  testnet: {
    chainId: 398,
    name: 'Near Testnet',
    explorer: 'https://eth-explorer-testnet.near.org',
    rpc: 'https://eth-rpc.testnet.near.org',
  },
};


export const EVMWalletChain = evmWalletChains[NetworkId];