"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {  WagmiConfig,  configureChains, createConfig } from "wagmi";
import { RainbowKitProvider, darkTheme, getDefaultWallets  } from "@rainbow-me/rainbowkit";
import { sepolia } from "viem/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'sectify',
  projectId: 'af355cf178ccd4c412bb89ee35dbb5df',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const WagProvider = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "rgb(0,153,71)",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WagProvider;
