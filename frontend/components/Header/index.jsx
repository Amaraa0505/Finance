import React from "react";
import { useRouter } from "next/router";
import "./header.module.css";

const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full  bg-zinc-600">
      <div className="container flex bg-red-900 text-gray-400 ">
        <div className="flex items-center gap-5">
          <img src="./geldlogo.svg"></img>
          <button
            className="font-semibold text-lg test"
            onClick={() => router.push("/records")}
          >
            Recordss
          </button>
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
