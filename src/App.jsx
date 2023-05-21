import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  WalletHandler,
  FileIo,
  RnsHandler,
  StorageHandler,
  FileUploadHandler,
} from "jackal.js";
import GetBalanceButton from "./components/getBalanceButton";
import ChainConfig from "./data/chainInfo";

function App() {
  const [count, setCount] = useState(0);
  const [addr, setAddr] = useState();

  useEffect(() => {
    const run = async () => {
      const wh = await WalletHandler.trackWallet({
        signerChain: "jackal-1",
        enabledChains: ["jackal-1"],
        queryAddr: "https://grpc.jackalprotocol.com",
        txAddr: "https://rpc.jackalprotocol.com",
      });

      console.log("get address");
      const address = wh.getJackalAddress();

      console.log("get file io");
      const fileIo = await FileIo.trackIo(wh);

      console.log("download file");
      const fdh = await fileIo.downloadFile(
        {
          rawPath: "s/default.json",
          owner: address,
          isFolder: false,
        },
        { track: 0 }
      );

      console.log({ bacon: fdh.receiveBacon() });
    };
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

      const rns = await RnsHandler.trackRns(wallet);

      const storage = await StorageHandler.trackStorage(wallet);

      const fileIo = await FileIo.trackIo(wallet);

      const f = new File(["RUHROH"], "password.txt");

      const handler = await FileUploadHandler.trackFile(f, "s/data");
      const readyFile = handler.getForUpload();

      const sourcesData = {
        data: null,
        exists: true,
        handler: handler,
        key: "credentials/password.txt",
        uploadable: readyFile,
      };

      const sources = {
        UploadListItem: sourcesData,
      };

      const parent = handler;

      const tracker = {
        Complete: 0,
        Timer: 0,
      };

      console.log("uploading");

      await fileIo.staggeredUploadFiles(sources, parent, tracker);

      const downloadDetails = {
        rawPath: "credentials/password.txt",
        owner: wallet.getJackalAddress(),
        isFolder: false,
      };

      const completion = {
        Track: 0,
      };

      console.log("downloading");

      await fileIo.downloadFile(downloadDetails, completion);
    };
    newRun();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GetBalanceButton />
    </>
  );
}

export default App;
