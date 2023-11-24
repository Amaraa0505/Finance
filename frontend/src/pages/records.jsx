import React from "react";

const infos = [
  {
    title: "Food & Drinks",
    price: "- 1,000"

  }
]

const Records = () => {
  return (
    <div className="flex">
      <div className="types w-96 p-8 h-[700px]">
        <h1 className="text-2xl font-semibold  ">Records</h1>
        <button className= "bg-blue-900 w-full rounded-full">+Add</button>
        <input placeholder="Search" className="p-3 w-full rounded-3xl"></input>
        <h1 className="font-bold text-xl">Types</h1>
        <li>All</li>
        <li>Income</li>
        <li>Expense</li>
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Category</h1>
          <button> Clear</button>
        </div>
        <div>
        <div className="dropdown">
  <div className="m-1 ">Food & Drinks</div>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
        </div>
      </div>
      <div className="p-8 ">
        <button className="">button</button>
        <details className="dropdown ml-96">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
<div>
<h1>Today</h1>
<div className="w-full flex gap-4">
<input type="checkbox" className="checkbox" disabled checked />
<img src="./Group 8.svg" className="w-7 h-7"></img>
<p>Lending & Rending</p>
<p className="ml-">- 1,000</p>
</div>
<div className="flex gap-4">
<input type="checkbox" className="checkbox" disabled checked />
<img src="./menu.svg" className="w-7 h-7"></img>
{infos.map((info)=>(
  <p>{info.title}</p>
 
))}
</div>
</div>
      </div>
      </div>
   
  );
};

export default Records;
