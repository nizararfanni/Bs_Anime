import React from "react";
import { UseGetLatestAnime } from "../../hooks/UseGetAnime";
import SeeMore from "../Elements/SeeMoreList";
import Date from "../Elements/Date";
import SceheduleList from "../Elements/SceheduleList";
import CardAnimeList from "../Elements/CardAnimeList";

const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const dates = ["24", "25", "26", "27", "28", "29", "30"];

const ListAnime = () => {
  const { latestAnimes, isLoading } = UseGetLatestAnime(1);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }
  // console.log(latestAnimes);
  const limitAnimies = latestAnimes.slice(0, 40);

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-300/50 to-gray-300 flex w-full">
      <div className="flex flex-col p-3 w-full">
        <div className="p-2 border-t-4 border-gray-400">
          <h2 className="text-2xl font-bold text-black">Anime Terbaru</h2>
        </div>
        <div className="relative">
          <CardAnimeList infiniteAnimes={limitAnimies} isLoading={isLoading} />
        </div>
        <div className="p-2 flex md:flex-row flex-col my-3">
          <SceheduleList />
          <Date items1={days} items2={dates} />
          <SeeMore />
        </div>
      </div>
    </div>
  );
};

export default ListAnime;
