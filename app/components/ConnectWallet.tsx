"use client"
import { toJSON } from "@/helpers";
import { useEffect, useState } from "react";
import { SmartAccount, Provider, types } from "zksync-ethers";

const ADDRESS = process.env.NEXT_PUBLIC_USER_INIT_ADDR || "";
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;


const provider = Provider.getDefaultProvider(types.Network.Sepolia);
const account = new SmartAccount({ address: ADDRESS, secret: PRIVATE_KEY }, provider);


function ConnectWallet() {
    const [smartAccountAddress, setSmartContractAddress] = useState<string>("")


    const walletConnection = async () => {
        setSmartContractAddress(await account.getAddress())
    }

    const disconnectWallet = () => {
        setSmartContractAddress("")
    }

    return (
        <div>
            <div onClick={() => walletConnection()} className="p-4 bg-black hover:cursor-pointer hover:bg-slate-700 text-white">{smartAccountAddress ? smartAccountAddress : "Connect Wallet"}</div>
            {smartAccountAddress ? <div onClick={() => disconnectWallet()} className="absolute right-4 top-2 z-40 bg-white hover:bg-slate-300 hover:cursor-pointer text-sm text-black p-2 rounded-md">Disconnect Wallet</div> : ""}
        </div>
    )
}


export default ConnectWallet