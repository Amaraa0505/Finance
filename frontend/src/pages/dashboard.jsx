import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center mt-8 ">
        <div className="flex justify-center">
          <img src="./geldlogo.svg" className="h-8"></img>
          <img src="./geld.svg" className="h-8"></img>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            1
          </div>

          <div className="bg-gray-400 w-20 h-1 flex items-center justify-center mt-3"></div>
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            2
          </div>

          <div className="bg-gray-400 w-20 h-1 flex items-center justify-center mt-3"></div>
          <div className="bg-gray-400 w-7 h-7 rounded-full flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <div className="w-96 h-96 mt-96 ml-80 ">
        <img src="Frame 10 (2).svg" className="flex justify-center"></img>
        <h1 className="font-bold text-xl flex justify-center"> Good Job!</h1>
        <p>
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <button
          className="bg-blue-600 w-full rounded-xl h-10 border-2 text-white"
          onClick={() => router.push("/")}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
