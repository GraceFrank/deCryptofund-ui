import React, { useContext } from "react";
import { AccountContext } from "../context/AccountContext";

export default function Nav() {
  const [account, connectWallet] = useContext(AccountContext);

  return (
    <header id="header" className="header fixed-top">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span>deCryptoFund</span>
        </a>

        <nav id="navbar" className="navbar">
          <ul>
            {account && (
              <li>
                <i className="bi bi-person-bounding-box"></i>
                <span title={account}>{account.substring(0, 20)}...</span>
              </li>
            )}
            {!account && (
              <li>
                <button
                  type="button"
                  className="btn getstarted scrollto"
                  onClick={connectWallet}
                >
                  Connect Wallet
                </button>
              </li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
