import React from "react";
import ButtonHeroSection from "./ButtonHeroSection";

const ContaineHero = ({ popularAnimes, activeIndex }) => {
  return (
    <div className="relative  w-1/2 flex flex-col text-black items-center lg:mt-5 py-20">
      <h1 className="text-4xl lg:text-6xl font-bold text-center items-center ">
        {popularAnimes[activeIndex]?.title || "Anime Title"}
      </h1>
      <div className="flex justify-evenly items-center font-semibold  text-sm py-4 space-x-2">
        <h3 className="border-r-2 border-black pr-4">
          {popularAnimes[activeIndex]?.type || "Type"}
        </h3>
        <p>{popularAnimes[activeIndex]?.chapter || "Chapter"}</p>
      </div>
      <p className="font-semibold  text-center items-center text-sm py-4 line-clamp-2 md:text-sm">
        {popularAnimes[activeIndex]?.description ||
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
      </p>
      <div className="flex gap-2 flex-col md:flex-row">
        <ButtonHeroSection type={"play"} ClassName={"bg-black text-white"}>Play Now</ButtonHeroSection>
        <ButtonHeroSection type={"favorite"} ClassName={"bg-gray-300 hover:bg-gray-400 hover:text-white" }>My Favorite</ButtonHeroSection>
      </div>
    </div>
  );
};

export default ContaineHero;
