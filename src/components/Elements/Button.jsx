import React from "react";

const Button = ({ onClick, children, Class }) => {
  return (
    <div className="flex flex-col  md:flex-col md:p-3 lg:flex-row gap-2 font-semibold text-center items-center">
      <button
        className={`transform transition duration-300 ease-in-out py-1 px-3 rounded-md ${Class}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
