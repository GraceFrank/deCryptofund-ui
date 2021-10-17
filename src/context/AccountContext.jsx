import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { getAccount, connectWallet } from "../utils/metamaskHelpers";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  async function setAccount() {
    const account = await getAccount();
    if (account) setCurrentAccount(account);
  }

  async function connectUserWallet() {
    const account = await connectWallet();
    if (account) setCurrentAccount(account);
  }

  useEffect(() => {
    setAccount();
  }, []);

  return (
    <AccountContext.Provider value={[currentAccount, connectUserWallet]}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
