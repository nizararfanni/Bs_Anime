import React from "react";
import { UseGetDetailAnime, UseGetPopularAnime } from "../../hooks/UseGetAnime";
import LIstAnimePopular from "../Elements/LIstAnimePopular";
import { Link } from "react-router-dom";

const DetailAnime = () => {
  const { popularAnimes, isLoading } = UseGetPopularAnime();
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }

  // console.log(popularAnimes);

  return (
    <div className=" bg-gradient-to-r from-gray-100 via-gray-300/50 to-gray-300 min-h-[400px] w-full flex  ">
      <div className=" w-full flex flex-col ">
        <div className="p-2 font-semibold text-2xl ">
          <h2>Rekomendasi Anime</h2>
        </div>
        <LIstAnimePopular popularAnimes={popularAnimes}></LIstAnimePopular>
      </div>
    
    </div>
  );
};

export default DetailAnime;
