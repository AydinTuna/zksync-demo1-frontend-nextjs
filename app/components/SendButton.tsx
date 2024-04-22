"use client"
import { ethers } from "ethers";
import { SmartAccount, Provider, types } from "zksync-ethers";

const ADDRESS = process.env.NEXT_PUBLIC_USER_INIT_ADDR || "";
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const provider = Provider.getDefaultProvider(types.Network.Sepolia);
const account = new SmartAccount({ address: ADDRESS, secret: PRIVATE_KEY }, provider);


function SendButton() {
    const sendDtn = async () => {
        const transferHandle = await account.transfer({
            token: process.env.NEXT_PUBLIC_DTN_TOKEN_ADDRESS,
            to: process.env.NEXT_PUBLIC_USER_ADDR1 || "",
            amount: ethers.parseEther("10"),
        });
        const tx = await transferHandle.wait();
        console.log(`Transaction hash of DTN: ${tx.hash}, was transferred to ${tx.to}`);
    }

    return (
        <>
            <button onClick={() => sendDtn()} className="px-4 py-2 rounded-md bg-black text-white hover:bg-slate-700 hover:cursor-pointer" type="submit">Send</button>
        </>
    )
}

export default SendButton