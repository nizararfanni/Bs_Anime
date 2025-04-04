import React from "react";
import Button from "../Elements/Button";

const PremiumContent = ({ img, title, description, checkOut, Details }) => {
  return (
    
      <div className="max-w-[300px] bg-blue-500 p-2 max-h-[full] text-white shadow-lg rounded-md shadow-gray-400 active:scale-105 hover:scale-105 transform transition duration-300 ease-in-out group">
        <div className="flex flex-col  p-2  ">
          <img src={img} alt="card-image" className="w-full rounded-md " />
          <div className="flex flex-col justify-center ">
            <p className="font-semibold text-white items-center flex justify-center text-lg group-active:text-black group-hover:text-black transform transition duration-300 ease-in-out">
              {title}
            </p>
            <p className="line-clamp-3 text-sm text-white opacity-80 group-active:text-black group-hover:text-black transform transition duration-300 ease-in-out">
              {description}
            </p>
          </div>
          <div className="flex justify-between items-center gap-2  py-4">
            <Button
              Class={
                "bg-pink-600 hover:bg-pink-700 text-sm md:text-lg w-[100px]"
              }
            >
              {checkOut}
            </Button>
            <Button
              Class={
                "bg-pink-600 hover:bg-pink-700 text-sm md:text-lg  w-[100px]"
              }
            >
              {Details}
            </Button>
          </div>
        </div>
      </div>
 
  );
};

export default PremiumContent;
