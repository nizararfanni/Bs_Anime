import React from "react";

const ButtonHeroSection = ({ children, type,ClassName }) => {
  return (
    <div className="flex flex-col md:flex-row mt-4 gap-3 justify-evenly group">
      <button className={`text-2xl flex min-w-52 mx-auto font-bold ${ClassName} py-2 px-5 text-center items-center rounded-lg transform transition duration-300 ease-in-out hover:bg-gray-300`}>
        {type === "favorite" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 group-hover:text-black mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-5-7 5V5z"
            ></path>
          </svg>
        )}
        <a href="#" className="group-hover:underline group-hover:text-black">
          {children}
        </a>
      </button>
    </div>
  );
};

export default ButtonHeroSection;
