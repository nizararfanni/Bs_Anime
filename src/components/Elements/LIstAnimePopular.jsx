import React from "react";
import { Link } from "react-router-dom";

const cleanUrl = (rawUrl) => {
  if (!rawUrl) return "";
  return rawUrl.replace("https://komikindo3.com/komik/", "");
};
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
          {/* overlay detail anime link */}
          <Link
            to={`/detail/${cleanUrl(anime?.link)}`}
            className="text-white hover:underline absolute left-0 bottom-0 right-0 top-1/2 text-center z-50 opacity-0 group-hover:opacity-100 "
          >
            View Details
          </Link>
          {/* overlay title */}
          <div className="absolute left-0 right-0 bottom-0 top-3/5 opacity-0 group-hover:opacity-100  transition-opacity duration-300 ease-in-out text-center font-bold text-2xl text-white z-10">
            {anime?.title || "No Title"}
          </div>
          {/* overlay biru */}
          <div className="absolute left-0 right-0 bottom-0 top-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-[#98D8EF] via-[#98D8EF]  transition-opacity duration-300 ease-in-out text-center font-bold text-2xl text-white "></div>
        </div>
      ))}
    </div>
  );
};

export default LIstAnimePopular;
