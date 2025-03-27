import React from "react";
import { UseGetAnime } from "../../hooks/UseGetAnime";
import SeeMore from "../Elements/SeeMoreList";
import Date from "../Elements/Date";
import SceheduleList from "../Elements/SceheduleList";
import CardAnimeList from "../Elements/CardAnimeList";

const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
const dates = ["24", "25", "26", "27", "28", "29", "30"];

const ListAnime = () => {
  const { animes, isLoading } = UseGetAnime("popular");

  // Kalo data belum diambil, tampilkan loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }
  // Duplikat array animes 10 kali biar  infinite scroll

  const infiniteAnimes = Array(10)
    .fill(null)
    .flatMap(() => animes);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-300/50 to-gray-300 flex w-full">
      <div className="flex flex-col p-3  w-full">
        <div className=" p-2 border-t-4 border-gray-400">
          <h2 className="text-2xl font-bold text-black ">Sedang Popular</h2>
        </div>
        <CardAnimeList
          infiniteAnimes={infiniteAnimes}
          isLoading={isLoading}
        ></CardAnimeList>
        <div className=" p-2 flex md:flex-row flex-col ">
          <SceheduleList />
          {/* mapping data days dan date yg di parsing jadi child */}
          <Date items1={days} items2={dates}></Date>
          <SeeMore />
        </div>
      </div>
    </div>
  );
};

export default ListAnime;
