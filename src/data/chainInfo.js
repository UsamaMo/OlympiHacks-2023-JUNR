import { Bech32Address } from "@keplr-wallet/cosmos";

const OsmoChainInfo = {
  rpc: "https://rpc-osmosis.blockapsis.com",
  rest: "https://lcd-osmosis.blockapsis.com",
  chainId: "osmosis-1",
  chainName: "Osmosis",
  stakeCurrency: {
    coinDenom: "OSMO",
    coinMinimalDenom: "uosmo",
    coinDecimals: 6,
    coinGeckoId: "osmosis",
    coinImageUrl: window.location.origin + "/public/assets/tokens/osmosis.svg",
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("osmo"),
  currencies: [
    {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      coinImageUrl:
        window.location.origin + "/public/assets/tokens/osmosis.svg",
    },
    {
      coinDenom: "ION",
      coinMinimalDenom: "uion",
      coinDecimals: 6,
      coinGeckoId: "ion",
      coinImageUrl: window.location.origin + "/public/assets/tokens/ion.png",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      coinImageUrl:
        window.location.origin + "/public/assets/tokens/osmosis.svg",
    },
  ],
  features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
  explorerUrlToTx: "https://www.mintscan.io/osmosis/txs/{txHash}",
};

const JackalChainInfo = {
  chainId: "jackal-1",
  chainName: "Jackal Mainnet",
  rpc: "https://rpc.jackalprotocol.com",
  rest: "https://api.jackalprotocol.com",
  bip44: {
    coinType: 118,
  },
  coinType: 118,
  stakeCurrency: {
    coinDenom: "JKL",
    coinMinimalDenom: "ujkl",
    coinDecimals: 6,
  },
  bech32Config: {
    bech32PrefixAccAddr: "jkl",
    bech32PrefixAccPub: "jklpub",
    bech32PrefixValAddr: "jklvaloper",
    bech32PrefixValPub: "jklvaloperpub",
    bech32PrefixConsAddr: "jklvalcons",
    bech32PrefixConsPub: "jklvalconspub",
  },
  currencies: [
    {
      coinDenom: "JKL",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "JKL",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.002,
        average: 0.002,
        high: 0.02,
      },
    },
  ],
  features: [],
};

const newJackalChain = {
  chainId: "jackal-1",
  chainName: "Jackal Mainnet",
  rpc: "https://rpc.jackalprotocol.com",
  rest: "https://api.jackalprotocol.com",
  bip44: {
    coinType: 118,
  },
  coinType: 118,
  stakeCurrency: {
    coinDenom: "JKL",
    coinMinimalDenom: "ujkl",
    coinDecimals: 6,
  },
  bech32Config: {
    bech32PrefixAccAddr: "jkl",
    bech32PrefixAccPub: "jklpub",
    bech32PrefixValAddr: "jklvaloper",
    bech32PrefixValPub: "jklvaloperpub",
    bech32PrefixConsAddr: "jklvalcons",
    bech32PrefixConsPub: "jklvalconspub",
  },
  currencies: [
    {
      coinDenom: "JKL",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "JKL",
      coinMinimalDenom: "ujkl",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.002,
        average: 0.002,
        high: 0.02,
      },
    },
  ],
  features: [],
};

export default JackalChainInfo;
