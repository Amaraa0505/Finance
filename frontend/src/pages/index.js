import React from "react";
// import Navbar from "../../components/Navbar";
import Doughnut from "../../components/Doughnut";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

export default function Home() {
  const Datas = [
    { name: "Lending & Renting", price: "- 1,000" },
    { name: "Lending & Renting", price: "- 1,000" },
    { name: "Lending & Renting", price: "- 1,000" },
    { name: "Lending & Renting", price: "- 1,000" },
  ];
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="w-full bg-slate-100 ">
        <div className="h-[50%] p-12 ">
          <div className=" flex justify-center gap-6 ">
            <div className="w-[400px] h-46 bg-blue-600 rounded-xl ">
              <div className="flex gap-2 p-10">
                <img src="./vector.svg"></img>
                <img src="./white.svg"></img>
              </div>
              <div className="flex flex-col p-2 ml-8">
                <h1 className="text-gray-400">Cash</h1>
                <div className="flex gap-16">
                  <p className="text-white text-2xl">10,000,00</p>
                  <img src="./sound.svg" className="w-8"></img>
                </div>
              </div>
            </div>

            <div className="rounded-xl w-[400px] h-46 bg-white p-10 flex flex-col gap-2">
              <div className="flex gap-2">
                <img src="./green.svg"></img>
                <h1 className="font-semibold">Your Income</h1>
              </div>
              <p className="text-3xl font-bold">1,200,000</p>
              <p className="text-gray-600">Your Income Amount</p>
              <div className="flex gap-2">
                <img src="./greensum.svg"></img>
                <p> 32% from last month</p>
              </div>
            </div>
            <div className="w-[400px] h-46 bg-white rounded-xl p-8 flex flex-col gap-2">
              <div className="flex gap-2">
                <img src="./blue.svg"></img>
                <h1 className="font-bold">Total Expenses</h1>
              </div>
              <p className="text-3xl font-bold">-1,200,00</p>
              <p className="text-gray-600">Your Income Amount</p>
              <div className="flex gap-2">
                <img src="./dooshoo.svg"></img>
                <p className="">32% from last month</p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly ">
            <div className="bg-white h-46 w-[400px] rounded-xl">
              <h1 className="font-semibold text-xl p-8">Income - Expenses</h1>
            </div>
            <div className="w-20">
              <Doughnut />
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex p-6 ml-8">
            <h1 className="font-bolds">Last Records</h1>
          </div>
          <div className="flex gap-4 flex-col">
            {Datas.map((Data) => (
              <div className="flex  ml-12 gap-4">
                <img src="./Group 8.svg"></img>
                <div className="flex justify-between">
                  <p>{Data.name}</p>
                  <p>{Data.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
