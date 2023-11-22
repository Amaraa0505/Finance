import React from "react";
// import Navbar from "../../components/Navbar";
import Doughnut from "../../components/Doughnut";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-screen bg-slate-100 ">
        <div className="h-[50%] p-12">
          <div className="h-[50%] flex justify-center gap-6">
            <img src="./Large.svg"></img>
            <div className="w-96 h-96">
              <div></div>
              <h1>Your Income</h1>
              <div className="w-96 bg-slate-600"></div>
            </div>
            <img src="./Frame 86.svg"></img>
          </div>

          <div>
            <div className="h-[50%] flex justify-center gap-6 mt-4">
              <Doughnut />
            </div>
          </div>
        </div>
        <div className="h-[50%]  ">
          <h1>Last Records</h1>
        </div>
      </div>
    </div>
  );
}
