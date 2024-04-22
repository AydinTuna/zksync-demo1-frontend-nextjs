"use client"
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { SmartAccount, Provider, types } from "zksync-ethers";

const ADDRESS = process.env.NEXT_PUBLIC_USER_INIT_ADDR || "";
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;


const provider = Provider.getDefaultProvider(types.Network.Sepolia);
const account = new SmartAccount({ address: ADDRESS, secret: PRIVATE_KEY }, provider);

function AccountPortfolio() {
    const [dtnBalance, setDtnBalance] = useState<string>("0")
    const [ethBalance, setEthBalance] = useState<string>("0")


    useEffect(() => {
        const fetchBalance = async () => {
            setDtnBalance((await account.getBalance("0xE1F2a8Eb190CE22677b69E0980BC42F9Db9CC597")).toString())
            setEthBalance((await account.getBalance()).toString())
        }
        fetchBalance()
    }, [dtnBalance, ethBalance])

    return (
        <div className="flex justify-between text-3xl font-semibold mx-auto max-w-2xl">
            <p>$ETH: {(parseInt(ethBalance) / (10 ** 18)).toFixed(5)}</p>
            <p>$DTN: {(parseInt(dtnBalance) / (10 ** 18)).toFixed(5)}</p>
        </div>
    )
}

export default AccountPortfolio