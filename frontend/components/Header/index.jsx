import React from "react";

const Header = () => {
  return (
    <div className="w-full flex bg-slate-400">
      <div className="container bg-red-900 text-gray-400 ">
        <div className="flex items-center gap-5">
          <img src="./geldlogo.svg"></img>
          <p className="font-semibold text-lg">Records</p>
        </div>
        <div className="flex w-[300px] justify-between">
          <button className="bg-blue-600 rounded-xl">+ Record</button>
          <img src="./Avatar.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
