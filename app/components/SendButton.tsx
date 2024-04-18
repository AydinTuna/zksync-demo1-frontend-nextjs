"use client"
import { SmartAccount, Provider, types } from "zksync-ethers";

const ADDRESS = process.env.USER_INIT_ADDR || "";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

console.log(PRIVATE_KEY);

const provider = Provider.getDefaultProvider(types.Network.Sepolia);
const account = new SmartAccount({ address: ADDRESS, secret: PRIVATE_KEY }, provider);

function SendButton() {
    const sendDtn = async () => {
        console.log(process.env.DTN_TOKEN_ADDRESS, process.env.USER_ADDR1);

        const transferHandle = await account.transfer({
            token: process.env.DTN_TOKEN_ADDRESS,
            to: process.env.USER_ADDR1 || "",
            amount: 1000000,
        });
        const tx = await transferHandle.wait();
        console.log(`Blockhash of DTN: ${tx.blockHash}, was transferred to ${tx.to}`);
    }

    return (
        <>
            <button onClick={() => sendDtn()} className="px-4 py-2 rounded-md bg-black text-white hover:bg-slate-700 hover:cursor-pointer" type="submit">Send</button>
        </>
    )
}

export default SendButton