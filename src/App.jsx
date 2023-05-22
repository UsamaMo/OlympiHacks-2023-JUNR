import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { WalletHandler } from "jackal.js";
import ChainConfig from "./data/chainInfo";
import QrCode from "./QrCode";
import "./styles.css"; //line 6-7 for qr code
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [addr, setAddr] = useState();

  useEffect(() => {
    const newRun = async () => {
      const walletConfig = {
        selectedWallet: "keplr",
        signerChain: "jackal-1",
        enabledChains: ["jackal-1"],
        queryAddr: "https://grpc.jackalprotocol.com",
        txAddr: "https://rpc.jackalprotocol.com",
        chainConfig: ChainConfig,
      };

      const wallet = await WalletHandler.trackWallet(walletConfig);

      const address = wallet.getJackalAddress();

      setAddr(address);
    };
    newRun();
  }, []);

  return (
    <>
     <div className="App">
       <Navbar/>
      
      <header className="App-header">
      <p class="barcode_font">
          Thank you for visiting JUNR
      </p>

      <p className = "texter">"Welcome to our revolutionary barcode scanning platform powered by blockchain technology.
At JUNR, we've combined the simplicity of barcode scanning with the security and transparency of blockchain to provide a seamless and trustworthy experience for accessing your digital wallets.
With our cutting-edge barcode scanner, you can easily scan barcodes from physical items or digital screens, allowing you to effortlessly retrieve essential information and interact with your blockchain-based wallets.
Experience the benefits of blockchain technology, including enhanced security, immutability, and decentralized control. Rest assured that your digital assets are protected by the power of the blockchain, providing you with peace of mind and confidence in your transactions.
Whether you're a cryptocurrency enthusiast, a collector of digital assets, or simply looking for a secure way to manage your digital wallet, our platform is designed to meet your needs. We prioritize user privacy, data integrity, and seamless user experience.
Join us today and unlock the power of blockchain-enabled barcode scanning. Take control of your digital assets with ease and explore a new level of convenience and security."
Feel free to customize the text based on your specific offerings and branding.</p>

    
      <div className="card">
        <button className="Button" onClick={() => setCount((count) => count + 1)}>
          Access Wallet
        </button>
        
      </div>
      
      <div className="barcode"><QrCode value={addr} /></div>

      </header>
        <Footer/>
      </div>
    </>
  );
}

export default App;
