import React from "react";
import { useRouter } from "next/router";

export default function Confirm() {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex justify-center mt-8 items-center">
        <img src="./geldlogo.svg"></img>
        <img src="./geld.svg"></img>

        <div className="flex">
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            1
          </div>

          <div className="bg-gray-400 w-20 h-1 flex items-center justify-center mt-3"></div>
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            2
          </div>

          <div className="bg-gray-400 w-20 h-1 flex items-center justify-center mt-3"></div>
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            3
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-96">
        <div className="flex-col items-center flex">
          <img src="./Frame 10.svg"></img>
          <h1 className="font-bold text-xl">Select base currency</h1>
          <input className="border-2 rounded-xl h-10 bg-slate-200 w-full mb-4 mt-6"></input>
          <p className="w-80 mb-6">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
          <button
            className="bg-blue-600 w-full rounded-xl h-10 border-2 text-white"
            onClick={() => router.push("/balance")}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
