import React from "react";

const Header = () => {
  return (
    <div className="flex justify-stretch">
      <div className="flex gap-4 items-center">
        <img src="./geldlogo.svg"></img>
        <img src="./geld.svg"></img>

        <p>Records</p>
        <button className="bg-blue-400 rounded-xl">+ Record</button>
        <img src="./Avatar.svg"></img>
        {/* <button className="bg-blue-600 rounded-xl ">+ Record</button> */}
      </div>
    </div>
  );
};

export default Header;
