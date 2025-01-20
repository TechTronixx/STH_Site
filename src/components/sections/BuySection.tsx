// import { SplineScene } from "../ui/splite";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { useState } from "react";
import htbLogo from "@/assets/htb-logo.png";

export function BuySection() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "D7TDPW8MNSEB3DPMNUSKV2UTZMVVGAEHCM9HHIBSMOON";

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-24 text-white bg-black" id="how-to-buy">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - How to Buy Instructions */}
          <div className="space-y-8">
            <Heading size="3xl">How to Buy</Heading>

            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-geist">
                  1. Get a Wallet
                </h3>
                <p className="text-slate-400">
                  Download and set up Phantom Wallet from the official website
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold font-geist">2. Get SOL</h3>
                <p className="text-slate-400">
                  Purchase SOL from any major exchange and send it to your
                  Phantom wallet
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold font-geist">
                  3. Connect & Swap
                </h3>
                <p className="text-slate-400">
                  Connect your wallet to Jupiter and swap SOL for $STH
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#DC2626] text-white px-6 py-3 rounded-full 
                    hover:bg-red-700 transition-all duration-300 font-geistmono"
                >
                  Get Phantom
                </a>
                <a
                  href="https://jup.ag/swap/SOL-D7tDpW8MnsEb3dpMnUSKv2uTZmVVGaEhcM9HHibSmoon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#FFD700] text-[#FFD700] px-6 py-3 
                    rounded-full hover:bg-[#FFD700] hover:text-black transition-all 
                    duration-300 font-geistmono"
                >
                  Trade on Jupiter
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Logo Image */}
          <div className="flex items-center justify-center">
            <img
              src={htbLogo}
              alt="HTB Logo"
              className="w-full max-w-[400px] h-auto object-contain animate-float"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contract Address Section */}
        <div className="mt-16" id="contract">
          <Heading className="mb-8 text-center">Contract Address</Heading>
          <div className="max-w-3xl p-6 mx-auto bg-white/15 backdrop-blur-sm rounded-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-2 rounded-lg bg-yellow-400/45 font-geistmono">
                  CA:
                </span>
                <span className="text-lg font-geistmono">
                  {contractAddress}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="bg-[#DC2626] text-white px-6 py-3 rounded-xl
                  hover:bg-red-700 transition-all duration-300 font-geistmono"
              >
                {copied ? "Copied!" : "Copy Address"}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
