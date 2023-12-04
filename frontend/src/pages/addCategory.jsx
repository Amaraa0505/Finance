import React from "react";

const addCategory = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Add Category</h1>
      <div>
        <img src="./House.svg"></img>
        <img src="./arrow_drop_down.svg"></img>
      </div>
      <input placeholder="name"></input>
      <button className="bg-green-400">Add</button>
    </div>
  );
};

export default addCategory;
