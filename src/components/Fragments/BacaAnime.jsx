import React, { useEffect } from "react";
import { UseGetbacaAnime } from "../../hooks/UseGetAnime";
import { Link, useParams } from "react-router-dom";

const BacaAnime = () => {
  // tangkap url dari  slug url baca
  const { url } = useParams();
  const { bacaAnime, isLoading } = UseGetbacaAnime(url);
  // console.log("url", url);

  if (isLoading) {
    return (
      // Perlu "return" untuk rendering elemen saat loading
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }
  // hapus https di awal url biar ga error berubah datanya wjwjw
  const cleanURl = (rawUrl) => {
    if (!rawUrl) return;
    return rawUrl.replace("https://komikindo3.com/", "");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-gray-100 via-gray-300/50 to-gray-300  flex items-center justify-center w-full">
      <div className="bg-blue-400 flex flex-col max-w-lg">
        <div className="flex  flex-col text-center p-3 z-10">
          <h3 className="font-bold ">Chapter :</h3>
          <p>{bacaAnime?.title}</p>
        </div>
        {/* overlay blur */}
        <div class="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
        <div className="flex flex-col z-10">
          {/* render anime list  */}
          {bacaAnime?.list && bacaAnime?.list.length > 0 ? (
            bacaAnime.list.map((chapter, index) => (
              <div className="relative" key={index}>
                <h3 className="text-center absolute inset-0 text-white font-semibold ">{`Page ${
                  index + 1
                }`}</h3>
                <img src={chapter} alt="" className="w-96 md:w-full h-auto" />{" "}
              </div>
            ))
          ) : (
            <div>not data avaliabel</div>
          )}
        </div>

        {/* tombol prev dan next di bacaANime */}
        <div className="z-10 flex justify-evenly shadow-md items-center">
          <Link
            to={`/baca/${cleanURl(bacaAnime?.back_chapter)}`}
            className="p-3 bg-amber-300 rounded-md font-semibold my-4 hover:underline transform transition duration-300 ease-in-out"
          >
            Previous Chapters
          </Link>
          <Link
            to={`/baca/${cleanURl(bacaAnime?.next_chapter)}`}
            className="p-3 bg-amber-300 rounded-md font-semibold my-4 hover:underline transform transition duration-300 ease-in-out"
          >
            Nexxt Chapters
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BacaAnime;
