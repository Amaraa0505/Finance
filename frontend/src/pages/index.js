import React from "react";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div className="h-screen bg-slate-300 ">
      <div className="h-[50%] p-12">
        <div className="h-[50%] flex justify-center gap-6">
          <img src="./Large.svg"></img>
          <img src="./Frame 85.svg"></img>
          <img src="./Frame 86.svg"></img>
        </div>
        <div className="h-[50%] flex justify-center gap-6 mt-4">
          <img src="./Frame 90.svg"></img>
          <img src="./Frame 88.svg"></img>
        </div>
      </div>
      <div className="h-[50%]  ">
        <h1>Last Records</h1>
      </div>
    </div>
  );
}
