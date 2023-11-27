import React from "react";
import { useRouter } from "next/router";
import "./header.module.css";
import { useState } from "react";
import Form from "./Form";
import Add from "./add";

const Header = () => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="  bg-yellow-600">
      <div className="flex bg-red-900 text-gray-400 justify-between ">
        <div className="flex gap-4 items-center p-8">
          <img src="./geldlogo.svg" className="w-8"></img>
          <h1 className="font-bold text-black ">Dashboard</h1>
          <button className=" text-lg " onClick={() => router.push("/records")}>
            Records
          </button>
        </div>
        <div className="flex w-[300px]  gap-4 items-center">
          <button
            onClick={() => {
              setisOpen(true);
            }}
            className="bg-blue-600 rounded-3xl h-10 w-32 text-white"
          >
            + Record
          </button>
          {/* <Form
            open={open}
            closeForm={closeForm}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            refresh={refresh}
            setRefresh={setRefresh}
          /> */}

          {/* <UserList
            users={userList}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
          <Toast count={10} message="Hello" /> */}
          <img src="./Avatar.svg" className="w-12"></img>
        </div>
      </div>
      {isOpen && <Add />}
    </div>
  );
};

export default Header;
