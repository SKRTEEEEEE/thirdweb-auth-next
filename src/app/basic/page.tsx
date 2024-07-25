"use client";
import type { NextPage } from "next";
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { LoginButton } from "./components/login-button";
import { client } from "../../lib/client";
import hederaTestnetChain from "../../lib/hedera-testnet";

const Basic: NextPage = () => {
  console.log("client: ", client)
  return (
    <ThirdwebProvider>
      <div>
        <h2>Step 1: Connect Wallet</h2>
        <ConnectButton chain={hederaTestnetChain} client={client} />
        <h2>Step 2: Sign the login payload</h2>
        <LoginButton />
      </div>
    </ThirdwebProvider>
  );
};

export default Basic;
