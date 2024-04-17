import { Provider, utils, types } from "zksync-ethers";
import { ethers } from "ethers";
import { toJSON } from "@/helpers";

export default function Home() {
  const provider = Provider.getDefaultProvider(types.Network.Sepolia);
  const ethProvider = ethers.getDefaultProvider("sepolia");

  const fetchNetwork = async () => {
    console.log("Block fetching...");
    console.log(`Block number: ${await provider.getBlockNumber()}`);
  }
  fetchNetwork()






  return (
    <div className="w-full text-center">Baho</div>
  );
}
