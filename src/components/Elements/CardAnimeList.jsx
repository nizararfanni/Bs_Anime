import React from 'react'

const CardAnimeList = ({infiniteAnimes ,isLoading}) => {
  return (
    <div className="flex overflow-x-auto w-full gap-4 py-4 scrollbar-hidden">
      {infiniteAnimes.length > 0 &&
        !isLoading &&
        infiniteAnimes.map((anime, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-52 h-72 bg-[#7E99A3] rounded-lg p-4 group hover:scale-110 transform transition duration-300 ease-in-out"
          >
            <img
              src={anime?.img}
              alt={anime?.title || "Anime Image"}
              className="w-full h-3/4 object-top rounded-md "
            />
            {/* Overlay tiitle */}
            <div className="absolute left-0 right-0 bottom-0 top-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center font-bold text-2xl text-white z-10">
              {" "}
              {anime?.title || "No Title"}
            </div>
            {/* Overlay biru */}
            <div className="absolute left-0 bottom-0 right-0 top-0 bg-gradient-to-t from-[#98D8EF] via-[#98D8EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
            {/* Ikon Play */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mt-2 truncate">
                {anime?.title || "No Title"}
              </h3>
              <div className="flex justify-between items-center text-white text-sm font-semibold">
                <p>Rating :</p>
                <p>Status :</p>
              </div>
              <div className="flex justify-between items-center text-white text-sm font-semibold">
                <p>{anime?.rating || "9/10"}</p>
                <p>{anime?.status || "not complete"}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CardAnimeList