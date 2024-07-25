import { defineChain } from 'thirdweb';

const hederaTestnetChain = defineChain({
  id: 296, // El ID de cadena para Hedera Testnet es 296
  name: "Hedera Testnet",
  rpc: "https://testnet.hashio.io/api", // RPC endpoint para Hedera Testnet
  nativeCurrency: {
    name: "Hbar",
    symbol: "HBAR",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "HashScan",
      url: "https://hashscan.io/testnet",
    },
    {
      name: "DragonGlass",
      url: "https://testnet.dragonglass.me",
    },
  ],
  testnet: true,
});

export default hederaTestnetChain;
