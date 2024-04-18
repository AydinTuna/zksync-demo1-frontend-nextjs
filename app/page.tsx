import ConnectWallet from "./components/ConnectWallet";
import SendButton from "./components/SendButton";


export default function Home() {


  return (
    <div>
      <div className="w-full text-center"><ConnectWallet /></div>
      <h1 className="text-center font-bold text-5xl mt-12" >Send $DTN!</h1>
      <div className="w-full text-center mt-6"><SendButton /></div>
    </div>

  );
}
