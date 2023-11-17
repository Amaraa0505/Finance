import React from "react";

export default function Confirm() {
  return (
    <div className="">
      <div className="flex justify-center mb-8">
        <div className="flex ">
          <img src="./geldlogo.svg"></img>
        </div>
        <div className="flex ">
          <img src="./geld.svg"></img>
        </div>
        {/* <div>
          <img src="./camera.svg"></img>
        </div> */}
        <div className="flex">
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            1
          </div>

          <div className="bg-gray-400 w-20 h-1 flex items-center justify-center"></div>
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            2
          </div>

          <div className="bg-gray-400 w-20 h-1 flex items-center justify-center"></div>
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            3
          </div>
        </div>
        <div className="flex-col items-center flex">
          <div className="w-96 h-96">
            <img src="./confirm.svg"></img>
          </div>
          <h1 className="font-bold text-xl">Select base currency</h1>
          <input className="border-2 rounded-xl h-10 bg-slate-200 w-full mb-4 mt-6"></input>
          <p className="w-80 mb-6">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
          <button className="bg-blue-600 text-white rounded-xl w-full h-10">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
