import React from "react";

const Income = () => {
  return (
    <div>
      <div className="modal-box flex gap-4">
        <div className=" flex flex-col gap-3 ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h1 className="text-2xl font-bold">Add Record</h1>
          <div className="bg-slate-400  rounded-xl ">
            <button className="text-white bg-blue-500 rounded-xl w-36 h-8">
              Expense
            </button>
            <button className="text-white bg-green-400 rounded-xl w-36">
              Income
            </button>
          </div>
          <input
            placeholder="000.00"
            className="bg-gray-200 rounded-lg h-16"
          ></input>
          <h1 className="">Category</h1>
          <select className="select select-bordered w-full">
            <option className="">Add category</option>
            <option>Home</option>
            <option>Gift</option>
            <option>Food</option>
            <option>Drink</option>
            <option>Taxi</option>
            <option>Shopping</option>
          </select>
          <div className="flex gap-12">
            <div>
              <h1>Date</h1>
              <select className="select select-bordered w-32 max-w-xs">
                <option>1</option>
              </select>
            </div>
            <div>
              <h1>Date</h1>
              <select className="select select-bordered w-32 max-w-xs">
                <option>2</option>
              </select>
            </div>
          </div>
          <button className="bg-green-600 rounded-xl text-white w-72">
            Add Record
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2 w-36">
            <h1>Payee</h1>
            <input
              placeholder="Write here"
              className="bg-gray-200 h-8 w-full p-3 rounded-xl"
            ></input>
            <h1>Note</h1>
            <input
              placeholder="Write here"
              className="bg-gray-200 h-64 rounded-xl p-2"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income;
