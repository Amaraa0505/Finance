import React, { useState, useEffect } from "react";

const Add = () => {
  const [isIncomeModalOpen, setIsIncomeModalOpen] = useState(false);

  return (
    <>
      <div className="  z-50 bg-[#555555db] top-0 right-0 left-0 block bottom-0 fixed">
        <div className=" opacity- bg-white flex flex-col w-[560px] h-[500px] ml-[700px] p-5 mt-[350px]  justify-start text-start">
          <div className="border-b-gray-500 flex py-5 px-6">Add Record</div>
          <div>
            <div className="flex-col">
              <div className="flex mr-5">
                <button className="rounded-3xl text-[#FFFFFF] bg-[#0166FF] flex justify-center border-[#0166FF] items-center h-10 gap-1 px-3">
                  Expense
                </button>
                <button className="rounded-3xl text-[#FFFFFF] bg-[#16A34A] flex justify-center items-center gap-1 px-3 border-8 border-[#16A34A] ">
                  Income
                </button>
                <div className="">
                  Amout
                  <input type="text" placeholder="₮ 000.00" />
                </div>
                <div
                  className=""
                  onClick={() => {
                    setIsIncomeModalOpen(true);
                  }}
                >
                  Category{" "}
                </div>
                <select className="select select-bordered w-full  max-w-xs">
                  <option>Write here</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div>
                {" "}
                Date
                <select className="select select-bordered w-full  max-w-xs">
                  <option>Oct 30, 2023</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div>
                Date
                <select className="select select-bordered w-full  max-w-xs">
                  <option>4:15 PM</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div>
                <button className="text-[#0166FF] flex justify-center items-center gap-1 px-3 ">
                  Add Record
                </button>
              </div>
            </div>
            <div className="">
              <div>Payee</div>
              <select className="select select-bordered w-full  max-w-xs">
                <option>Write here</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <div>
                <p>Note</p>
                <textarea
                  className="textarea"
                  placeholder="Write here"
                  disabled
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isIncomeModalOpen && <Add />}
    </>
  );
};
export default Add;
