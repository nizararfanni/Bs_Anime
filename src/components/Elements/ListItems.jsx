import React from "react";

const ListItems = ({ children, Class }) => {
  return (
    <div className="flex items-center border-t-3 w-full lg:border-none">
      <ul className="flex flex-col md:flex-col  md:p-2 lg:flex-row gap-4 text-center items-center justify-center font-semibold w-full">
        <li
          className={` rounded-md px-4  p-1 block w-full text-center transform transition duration-300 ease-in-out ${Class}`}
        >
          {children}
        </li>
      </ul>
    </div>
  );
};

export default ListItems;
