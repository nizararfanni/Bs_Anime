import React from "react";
import Button from "./Button";

const Tittle = ({ handelNavbarIsOpen }) => {
  return (
    <div className=" text-blue-600 flex items-center justify-between w-full lg:w-auto ">
      <h3 className=" font-bold text-2xl">NZStation</h3>
      <div className="lg:hidden">
        <Button onClick={handelNavbarIsOpen}>☰</Button>
      </div>
    </div>
  );
};

export default Tittle;
