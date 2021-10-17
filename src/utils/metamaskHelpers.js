export const isMetaMaskInstalled = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return false;
    } else {
      console.log("We have the ethereum object", ethereum);
      return true;
    }
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    const { ethereum } = window;

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.log("No authorized account found");
    }
  } catch (error) {
    console.log(error);
  }
};
