import React from "react";
import { Link } from "react-router-dom";

const Button = ({ onClick, children, Class, to ,ClassDiv}) => {
  return (
    <div
      className={`flex flex-col  md:flex-col  lg:flex-row gap-2 font-semibold text-center items-center ${ClassDiv} cursor-pointer`}
    >
      <Link
        to={to}
        className={`transform transition duration-300 ease-in-out py-1 px-3 rounded-md ${Class}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );
};

export default Button;
