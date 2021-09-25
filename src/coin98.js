const coin98Wallet = async () => {
  console.log("window object : ", window.coin98);
  if (typeof window.coin98 !== "undefined") {
    console.log("Coin98 Extension is installed!");
  }
  const connectObject = {
    name: "Luna Dex",
    logo: "https://coin98.s3-ap-southeast-1.amazonaws.com/lunaIcon.png",
  };
  const account = await window.coin98.sol.connect(connectObject);
  // /* This would return a list of current connected accounts and their status
  //   Example {
  //     address,
  //     isActive,
  //     name
  //   }
  // */
  console.log("account : ", account);
  // // If your account is connected and session remains connected you can check by
  if (window.coin98.sol.isConnected) {
    // Coin98 Extension connected
    // const acc = window.coin98.sol.get();
    // console.log("coin 98 acc : ", acc);
  }
};

export default coin98Wallet;
