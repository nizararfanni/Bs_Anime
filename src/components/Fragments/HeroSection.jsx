import React, { useEffect, useState } from "react";
import { UseGetAnime } from "../../hooks/UseGetAnime";
import ButtonCarousel from "../Elements/ButtonCarousel";
import ContaineHero from "../Elements/ContaineHero";

const HeroSection = () => {
  // active index untuk menyesuaikan gamabr yg di tampilkan carousel
  const [activeIndex, setActiveIndex] = useState(0);
  // mengambil data daari api,hooks customs
  const { animes, isLoading } = UseGetAnime("popular")

  // handle event next carousel next
  const handleNext = () => {
    setActiveIndex((nextIndex) => (nextIndex + 1) % animes.length);
  };
  // handle event prev carousel prevous
  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + animes.length) % animes.length
    );
  };

  // kalo data belum di ambil maka di tampilkan loading
  if (isLoading) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className=" container sm:mx-auto lg:mx-15 flex lg:flex-row flex-col  items-center min-w-full">
      <ContaineHero animes={animes} activeIndex={activeIndex} />
      {/* mapping data dari api gamabr */}
      <div className="relative w-1/2 min-h-screen overflow-hidden ">
        {animes.map((anime, index) => (
          <div key={index}>
            <img
              src={anime?.img}
              alt=""
              className={`absolute inset-0 w-full lg:[max-h-500px] object-top rounded-md  ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* <div className="absolute inset-0 max-h-72 lg:min-h-screen bg-gradient-to-r from-transparent via-transparent to-[rgba(0,0,0,0.5)]"></div> */}
          </div>
        ))}
      </div>
      {/* button next dan prev */}
      <ButtonCarousel
        handleCarousel={handleNext}
        ClassName={"right-0 "}
        type={"next"}
      />
      <ButtonCarousel
        handleCarousel={handleNext}
        ClassName={"left-0"}
        type={"prev"}
      />
    </div>
  );
};

export default HeroSection;
