"use client";

import { useActiveAccount } from "thirdweb/react";
import { generatePayload, verifyPayload } from "../../basic/actions/auth";
import { signLoginPayload } from "thirdweb/auth";
import { actionAdmin } from "../actions/auth";

export const ModificarBddButton: React.FC = () => {
  const account = useActiveAccount();
  console.log("Account: ",account)
  async function handleClick() {
    if (!account) {
      return alert("Please connect your wallet");
    }
    if(account.address !== "0x490bb233c707A0841cA52979Be4D88B6621d1988"){
            return alert("Only admin can do")
        }
    // Step 1: Generate the payload
    const payload = await generatePayload({ address: account.address });
    // Step 2: Sign the payload
    const signatureResult = await signLoginPayload({ account, payload });
    // Step 3: Call the login function we defined in the auth actions file    
    const response = await actionAdmin(signatureResult);
    (response?.success === false)&&alert(response.message)
    console.log("response: ", response)
  }
  return (
    <button disabled={!account} onClick={handleClick}>
      Hacer algo en la base de datos y revalidar la ruta
    </button>
  );
};