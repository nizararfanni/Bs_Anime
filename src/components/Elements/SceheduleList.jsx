import React from "react";

const SceheduleList = () => {
  return (
    <div className="p-2 flex md:flex-row flex-col ">
      <h2 className="text-3xl font-bold text-center mb-3 ">Jadwal Tayang</h2>
      <div className="group flex  px-2 justify-center items-center text-center max-h-16">
        <div className="flex p-2 md:mb-0 mb-2 justify-center items-center bg-black rounded-md group-hover:bg-white transform transition duration-300 ease-in-out">
          <div className="text-white ms-3 group-hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
          <div className="">
            <p className="px-5 text-2xl font-bold text-center text-white group-hover:text-black">
              Update
            </p>
            <p className="px-5 text-2xl font-bold text-center text-white group-hover:text-black">
              Terbaru
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceheduleList;
