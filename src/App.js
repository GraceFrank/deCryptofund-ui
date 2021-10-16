import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./utils/DeCryptoFund.json";
import "./App.css";

export default function App() {
  const contractAddress = "0xC48AD3d45675Fbb8d343AE29A208bE3D7692C948";
  const contractABI = abi.abi;
  const [currentAccount, setCurrentAccount] = useState("");
  const [totalFunding, setTotalFunding] = useState(0);
  const [loadingTotalFund, setLoadingTotalFund] = useState(false);
  const [allFundings, setAllFundings] = useState([]);
  const [message, setMessage] = useState("");

  const getAllFundings = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        /*
         * Call the getallFundings method from your Smart Contract
         */
        const fundings = await wavePortalContract.getAllFundings();

        /*
         * We only need address, timestamp, and message in our UI so let's
         * pick those out
         */
        let fundingsCleaned = [];
        fundings.forEach((funding) => {
          fundingsCleaned.push({
            address: funding.funder,
            timestamp: new Date(funding.timestamp * 1000),
            message: funding.message,
          });
        });

        /*
         * Store our data in React State
         */
        setAllFundings(fundingsCleaned);

        wavePortalContract.on("NewFunding", (from, timestamp, message) => {
          console.log("NewFunding", from, timestamp, message);

          setAllFundings((prevState) => [
            ...prevState,
            {
              address: from,
              timestamp: new Date(timestamp * 1000),
              message: message,
            },
          ]);
        });
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      /*
       * Check if we're authorized to access the user's wallet
       */
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fund = async (e) => {
    e.preventDefault();
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        /*
         * You're using contractABI here
         */
        const deCryptoFundContract = await new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await deCryptoFundContract.getFundingCount();
        console.log("Retrieved total funds count...", count.toNumber());

        const fundTnx = await deCryptoFundContract.fund(message, {
          gasLimit: 300000,
        });
        console.log("Mining... ", fundTnx.hash);

        count = await deCryptoFundContract.getFundingCount();
        console.log("Retrieved total funds count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  async function fetchTotalFunding() {
    try {
      setLoadingTotalFund(true);

      const { ethereum } = window;

      if (!ethereum) {
        console.log("Ethereum object doesn't exist!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      /*
       * You're using contractABI here
       */
      const deCryptoFundContract = await new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      let count = await deCryptoFundContract.getFundingCount();
      if (count) setLoadingTotalFund(false);
      setTotalFunding(Number(count));
    } catch (err) {
      console.log(err);
      setLoadingTotalFund(false);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    fetchTotalFunding();
    getAllFundings();
  }, []);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        {loadingTotalFund && <div>Loading...</div>}
        <div className="header">👋 Total Funding: {totalFunding}</div>

        <div className="bio">
          I am farza and I worked on self-driving cars so that's pretty cool
          right? Connect your Ethereum wallet and wave at me!
        </div>

        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        <form onSubmit={fund}>
          <label>
            Message:
            <input
              type="text"
              id="message"
              required
              onChange={({ target }) => setMessage(target.value)}
            />
          </label>
          <button type="submit" className="waveButton">
            Fund Me
          </button>
        </form>
        {allFundings.map((wave, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "OldLace",
                marginTop: "16px",
                padding: "8px",
              }}
            >
              <div>Address: {wave.address}</div>
              <div>Time: {wave.timestamp.toString()}</div>
              <div>Message: {wave.message}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
