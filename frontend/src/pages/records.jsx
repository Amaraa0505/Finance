import React from "react";

const Records = () => {
  const Datas = [
    { name: "Lending & Renting", price: "- 1,000" },
    { name: "Lending & Renting", price: "- 1,000" },
    { name: "Lending & Renting", price: "- 1,000" },
  ];
  const Infos = [
    { name: "Food & Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
    { name: "Life & Entertainment" },
    { name: "Communication, PC" },
    { name: "Financial expenses" },
    { name: "Investments" },
    { name: "Income" },
    { name: "Others" },
  ];
  return (
    <div className="flex bg-gray-200">
      <div className="types w-[400px] p-8 h-[1100px] bg-white m-12">
        <h1 className="text-2xl font-semibold  mb-4">Records</h1>
        <button className="bg-blue-600 w-full h-10 rounded-full mb-4 text-white">
          + Add
        </button>
        <input
          placeholder="Search"
          className="p-3 w-full rounded-xl mb-4 border-2 bg-slate-200"
        ></input>
        <h1 className="font-bold text-xl mb-4">Types</h1>
        <ul className="flex gap-2 flex-col mb-6">
          <p>All</p>
          <p>Income</p>
          <p>Expense</p>
        </ul>
        <div className="flex justify-between">
          {/* <h1 className="text-xl font-semibold">Category</h1> */}

          <div className="">
            {Infos.map((Info) => (
              <div className="flex gap-2 mb-6">
                <img src="./nud.svg"></img>
                <p>{Info.name}</p>
                <img src="./sum.svg"></img>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-blue-600">+</p>
          <p> Add Category</p>
        </div>
        <h1 className=" font-bold mb-5 mt-5">Amount Range</h1>
        <div className="flex gap-4 justify-between">
          <div className="h-12 w-32 bg-slate-200 rounded-md p-3">0</div>
          <div className="h-12 w-32 bg-slate-200 rounded-md p-3">1000</div>
        </div>
      </div>
      <div className="p-8 ">
        <div className="flex justify-between mb-4">
          <div className="flex items-center ">
            <img src="./zuun.svg"></img> Last 30 Days
            <img src="./baruun.svg"></img>
          </div>
          <select className="select select-bordered w-full max-w-xs ">
            <option disabled selected>
              Newest first
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="w-[1400] flex items-center gap-4  mb-5 rounded-xl bg-white h-20 w-[1400px]">
          <input type="checkbox" className="checkbox ml-6" disabled checked />
          <div className="flex justify-between">
            <p>Select all</p>
            <p>- 35,500</p>
          </div>
        </div>
        <div>
          <h1 className="mb-6 mt-4 font-bold">Today</h1>
          <div className="w-[1400] flex items-center gap-4  mb-5 rounded-xl bg-white h-20 w-[1400px]">
            <input type="checkbox" className="checkbox ml-6" disabled checked />
            <img src="./Group 8.svg" className="w-12"></img>
            <p>Lending & Rending</p>
            <p className="">- 1,000</p>
          </div>
          <div className="flex gap-4  flex-col">
            {Datas.map((Data) => (
              <div className="flex items-center  gap-4 rounded-xl bg-white h-20 w-[1400]">
                <input
                  type="checkbox"
                  className="checkbox ml-6"
                  disabled
                  checked
                />
                <img src="./menu.svg" className="w-12"></img>
                <p>{Data.name}</p>
                <p className="flex ml-96">
                  <p>{Data.price}</p>
                </p>
                {/* <p className="">
                  <h1 className="bg-gray-600 w-96 h-[2px] rounded-3xl"></h1>
                </p> */}
              </div>
            ))}
          </div>
          <h1 className="mb-6 mt-4 font-bold">Yesterday</h1>
          <div>
            {Datas.map((Data) => (
              <div className="flex items-center  gap-4 rounded-xl bg-white mb-4 h-20 w-[1400]">
                <input
                  type="checkbox"
                  className="checkbox ml-6"
                  disabled
                  checked
                />
                <img src="./menu.svg" className="w-12"></img>
                <p>{Data.name}</p>
                <p className="flex ml-96">
                  <p>{Data.price}</p>
                </p>
                {/* <p className="">
                  <h1 className="bg-gray-600 w-96 h-[2px] rounded-3xl"></h1>
                </p> */}
              </div>
            ))}
          </div>
          <div className="">
            {Datas.map((Data) => (
              <div className="flex items-center  gap-4 rounded-xl bg-white mb-4 h-20 w-[1400]">
                <input
                  type="checkbox"
                  className="checkbox ml-6"
                  disabled
                  checked
                />
                <img src="./menu.svg" className="w-12"></img>
                <p>{Data.name}</p>
                <p className="flex ml-96">
                  <p>{Data.price}</p>
                </p>
                {/* <p className="">
                  <h1 className="bg-gray-600 w-96 h-[2px] rounded-3xl"></h1>
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
