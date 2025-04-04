import React, { useState } from "react";
import {
  useFetchAnimeByTypeDetails,
  UseGetAnimeByType,
} from "../../hooks/UseGetAnime";
import Button from "../Elements/Button";

const TypeAnime = () => {
  const { TypeAnimes, isLoading } = UseGetAnimeByType();
  const [selectedType, setSelectedType] = useState("manga");
  const [pages, setPages] = useState(1);
  //ambil value pilihan type dan page dan masukan ke customs detail anime by type
  const { animeTypeDetails, isLoading: LoadindTypeDetails } =
    useFetchAnimeByTypeDetails(selectedType, pages);

  const handleChangeType = (e) => {
    setSelectedType(e.target.value);
    setPages(1);
    console.log("pilih apa", selectedType);
  };


  const nextPage = () => {
    // Jika halaman saat ini adalah total_page, pindah ke halaman 1
    setPages((currentPage) =>
      currentPage === animeTypeDetails.total_page ? 1 : currentPage + 1
    );
  };

  const prevPage = () => {
    // Jika halaman saat ini adalah halaman 1, pindah ke total_page
    setPages((currentPage) =>
      currentPage === 1 ? animeTypeDetails.total_page : currentPage - 1
    );
  };

  //loading
  if (isLoading || LoadindTypeDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }
  console.log("animeTypeDetails", animeTypeDetails);

  return (
    <div className=" min-h-screen flex justify-center w-full">
      <div className="w-full bg-blue-600 flex justify-center flex-col">
        <div className="w-full bg-blue-600 flex justify-center p-5">
          <h2 className="font-bold text-2xl text-white">
            Type Anime According Genre
          </h2>
        </div>
        {/* Render tombol/filter berdasarkan jenis */}
        <div className="flex justify-center gap-3">
          {TypeAnimes.map((jenis) => (
            <button
              key={jenis}
              onClick={handleChangeType}
              value={jenis}
              className="bg-blue-400 p-4 rounded-full text-white font-semibold hover:bg-blue-500 transition-all duration-300"
            >
              {jenis}
            </button>
          ))}
        </div>

        <p className="text-center font-bold text-2xl text-white p-4">
          filteer by {selectedType}
        </p>

        {/* render data manga yg sudah di pilih berdasarkan type */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center py-2 ">
          {animeTypeDetails.data?.length > 0 ? (
            animeTypeDetails.data?.map((anime, index) => (
              <div
                className="flex flex-col justify-center bg-blue-600 rounded-md gap-2"
                key={index}
              >
                <div className="w-60 h-auto rounded-md cursor-pointer bg-blue-300 my-3">
                  <img
                    src={anime.img}
                    alt=""
                    className="p-3 w-[300px] h-[300px] rounded-md"
                  />
                  <p className="text-center  font-bold text-white truncate">
                    {anime.title}
                  </p>
                  <div className="flex justify-evenly gap-3 text-white font-semibold">
                    <p>Rating</p>
                    <p>Type</p>
                  </div>
                  <div className="flex justify-evenly gap-3 p-2 text-white font-semibold">
                    <p>{anime.ratting}</p>
                    <p>{anime.type}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Data Not Found</div>
          )}
        </div>
        {/* next and prev button pages */}
        <p className="text-center font-bold text-2xl text-white">
          {animeTypeDetails.current_page}
        </p>
        <div className="flex justify-center  items-center gap-5 p-4">
          <Button Class={"bg-gray-700 text-white"} onClick={prevPage}>
            Prev Pages
          </Button>
          <Button Class={"bg-gray-700 text-white"} onClick={nextPage}>
            {" "}
            Next Pages
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TypeAnime;
