import React from "react";

const Date = ({items1,items2}) => {
  return (
    <div className="flex gap-3 flex-col bg-[#FBFBFB] rounded-md shadow-md opacity-70 font-semibold px-2">
      <div className="grid grid-cols-7 gap-2 md:gap-4">
        {/* mapping data hari dan tanggal nya biar resubael */}
        {items1.map((item, index) => (
          <p
            key={index}
            className="hover:underline hover:bg-blue-300 text-sm rounded-md transform transition duration-300 ease-in-out py-1 text-center"
          >
            {item}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {items2.map((item, index) => (
          <p
            key={index}
            className="hover:underline hover:bg-blue-300 text-sm rounded-md transform transition duration-300 ease-in-out py-1 text-center"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Date;
