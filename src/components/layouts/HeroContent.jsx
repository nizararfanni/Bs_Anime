import React from "react";
import HeroSection from "../Fragments/HeroSection";
import Navbar from "../Fragments/Navbar";
import ListAnime from "../Fragments/ListAnime";
import LIstRecomedasionAnime from "../Fragments/LIstRecomedasionAnime";
import Footer from "../Fragments/Footer";

const HeroContent = () => {

  return (
    <div className=" w-full bg-gradient-to-r from-gray-100 via-gray-300/50 to-gray-300">
      {/* Bagian Hero */}
      <div className="flex min-h-screen items-center justify-center relative">
        <Navbar />
        <HeroSection />
      </div>
      {/* Bagian ListAnime */}
      <div className=" bg-gray-200">
        <ListAnime />
      </div>
      <div className=" bg-gray-200">
        <LIstRecomedasionAnime />
      </div>
      <div className=" bg-gray-200">
        <Footer />
      </div>
    </div>
  );
};

export default HeroContent;
