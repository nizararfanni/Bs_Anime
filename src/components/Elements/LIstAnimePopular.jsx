import React from 'react'

const LIstAnimePopular = ({ popularAnimes }) => {
  return (
    <div className="flex relative gap-4 overflow-hidden overflow-x-auto scrollbar-hidden items-center min-h-[300px]">
      {popularAnimes.map((anime, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-52 h-72 bg-[#7E99A3] rounded-lg p-4 group hover:scale-110 transform transition duration-300 ease-in-out "
        >
          <img
            src={anime?.img}
            alt={anime?.title || "Anime Image"}
            className="w-full max-h-3/4 object-top rounded-md "
          />
          <p className="text-white font-bold truncate">{anime?.title}</p>
          <div className="flex justify-between text-sm text-white font-semibold">
            <div>
              <p>Type :</p>
              <p>Last Update :</p>
            </div>
            <div>
              <p>{anime?.type}</p>
              <p>{anime?.last_update}</p>
            </div>
          </div>
          {/* overlay title */}
          <div className="absolute left-0 right-0 bottom-0 top-3/5 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out text-center font-bold text-2xl text-white z-10">
            {anime?.title || "No Title"}
          </div>
          {/* overlay biru */}
          <div className="absolute left-0 right-0 bottom-0 top-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#98D8EF] via-[#98D8EF]  transition-opacity duration-300 ease-in-out text-center font-bold text-2xl text-white "></div>
          {/* ikon play overlay */}
          <div className="absolute flex justify-center  left-0 right-0 bottom-0 top-0 opacity-0 group-hover:opacity-100   duration-300 ease-in-out text-center font-bold text-2xl text-white items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LIstAnimePopular