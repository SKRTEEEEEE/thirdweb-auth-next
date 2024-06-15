"use client";
import type { NextPage } from "next";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../../lib/client";
import { ModificarBddButton } from "./components/bdd-button";

const JWTCookieAdminPage: NextPage = () => {
    const acount = useActiveAccount()
  return (
    <div>
      <h2>Step 1: Connect Wallet</h2>
      <ConnectButton client={client} />
      {acount&&<>
        <h2>Step 2: Sign("submit") the login payload/admin petition to bdd or similar</h2>
        <ModificarBddButton />   
      </>}
         
    </div>
  );
};

export default JWTCookieAdminPage;