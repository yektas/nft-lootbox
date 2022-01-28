import Link from "next/link";
import { ConnectWallet } from "@3rdweb/react";
export default function Navbar() {
  return (
    <nav className="flex justify-between w-full h-10 px-4 pt-4 pb-20 font-sans md:px-20 ">
      <div className="flex gap-4 md:gap-10">
        <Link href="/">
          <a className="text-2xl text-gray-700 no-underline hover:text-primary">
            Quiz
          </a>
        </Link>
        <Link href="/lounge">
          <a className="text-2xl text-gray-700 no-underline hover:text-primary">
            Winner's Lounge
          </a>
        </Link>
      </div>
      <ConnectWallet />
    </nav>
  );
}
