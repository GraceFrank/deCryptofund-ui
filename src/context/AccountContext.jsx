import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { connectWallet } from "../utils/metamaskHelpers";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  async function getAccount() {
    const account = await connectWallet();
    if (account) setCurrentAccount(account);
  }

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <AccountContext.Provider value={[currentAccount, setCurrentAccount]}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
