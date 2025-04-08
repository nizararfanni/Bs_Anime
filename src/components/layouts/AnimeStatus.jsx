import React, { useState } from "react";
import {
  UseFecthAnimeCopleted,
  UsefetchListAnimeCompleted,
} from "../../hooks/UseGetAnime";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const AnimeStatus = () => {
  const [statusAnime, setStatusAnime] = useState("completed");
  const [page, setPage] = useState(1);
  const [activeStatus, setActiveStatus] = useState("ongoing");
  const { animeStatus, isLoading } = UseFecthAnimeCopleted();
  const { listAnimeCompleted, isLoading: isLoading2 } =
    UsefetchListAnimeCompleted(statusAnime, page);

  if (isLoading || isLoading2) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }

  const handleChangeStatus = (e) => {
    setStatusAnime(e.target.value);
    setActiveStatus(e.target.value);
    console.log("Clicked value:", e.target.value);
    setPage(1);
  };

  const nextPage = () => {
    setPage((current_page) => current_page === listAnimeCompleted.total_page ? 1 : current_page + 1);
  }
  const prevPage = () => {
    setPage((current_page) => current_page === 1 ? listAnimeCompleted.total_page : current_page - 1);
  }
  return (
    <div className=" min-h-screen flex justify-center w-full">
      <div className="w-full bg-blue-600 flex justify-center flex-col">
        <div className="w-full bg-blue-600 flex justify-center p-5">
          <h2 className="font-bold text-2xl text-white">
            Type Anime According Status
          </h2>
        </div>
        {/* Render tombol/filter berdasarkan jenis */}
        <div className="flex justify-center gap-3">
          {animeStatus.map((status) => (
            <button
              key={status}
              onClick={handleChangeStatus}
              value={status}
              className={`bg-blue-400 p-4 rounded-full text-white font-semibold hover:bg-blue-500 transition-all duration-300 ${
                activeStatus === status ? "bg-blue-500" : "bg-blue-400"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <p className="text-center font-bold text-2xl text-white p-4">
          {/* filteer by {selectedType} */}
        </p>

        {/* render data manga yg sudah di pilih berdasarkan stsatus */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center py-2 ">
          {listAnimeCompleted.data?.length > 0 ? (
            listAnimeCompleted.data?.map((anime, index) => (
              <Link
                to={`/detail/${anime.url}`}
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
              </Link>
            ))
          ) : (
            <div>Data Not Found</div>
          )}
        </div>
        <p className="text-center font-bold text-2xl text-white">
          {listAnimeCompleted.current_page} 
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

export default AnimeStatus;
