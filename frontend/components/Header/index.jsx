import React from "react";
import { useRouter } from "next/router";
import "./header.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <div className="  bg-yellow-600">
      <div className="container flex bg-red-900 text-gray-400 justify-between ">
        <div className="flex gap-4 items-center p-8">
          <img src="./geldlogo.svg" className="w-8"></img>
          <h1 className="font-bold text-black ">Dashboard</h1>
          <button className=" text-lg " onClick={() => router.push("/records")}>
            Records
          </button>
        </div>
        <div className="flex w-[300px]  gap-4 items-center">
          <button className="bg-blue-600 rounded-3xl h-10 w-32 text-white">
            + Record
          </button>
          <img src="./Avatar.svg" className="w-12"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
