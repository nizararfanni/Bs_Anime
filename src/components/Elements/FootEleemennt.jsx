import React from "react";

const Foot = ({ title, description, children }) => {
  return (
    <div className="col-span-1 p-4 shadow-md m-2 rounded-md group active:scale-110 active:bg-blue-500 hover:scale-110 hover:bg-blue-500 transform transition duration-300 ease-in">
      <div className="group-hover:text-white group-active:text-white">
        <h2 className="font-bold text-2xl text-blue-600 group-hover:text-white text-center">
          {title}
        </h2>
        <p className="text-sm font-semibold text-black my-3 group-hover:text-white">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Foot;
