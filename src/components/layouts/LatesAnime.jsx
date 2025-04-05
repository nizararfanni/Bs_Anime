import React, { useState } from "react";
import { UseGetLatestAnime } from "../../hooks/UseGetAnime";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const LatesAnime = () => {
  const [page, setPage] = useState(1);
  const { latestAnimes, isLoading } = UseGetLatestAnime(page);

  //   tampilkan laoding kalo datd belum ada
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }

  const nextPage = () => {
    setPage((currentPage) =>
      currentPage === latestAnimes.length ? 1 : currentPage + 1
    );
  };

  const prevPage = () => {
    setPage((currentPage) =>
      currentPage === 1 ? latestAnimes.length : currentPage - 1
    );
  };

  // {
  //   console.log("form latest file", latestAnimes);
  // }
  return (
    <div className=" min-h-screen flex justify-center w-full">
      <div className="w-full bg-blue-600 flex justify-center flex-col">
        <div className="w-full bg-blue-600 flex justify-center p-5">
          <h2 className="font-bold text-2xl text-white">Latest Anime</h2>
        </div>

        {/* render data manga yg sudah di pilih berdasarkan type */}
        <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 place-items-center py-2  ">
          {latestAnimes?.length > 0 ? (
            latestAnimes?.map((anime, index) => (
              <div
                className="relative flex flex-col justify-center bg-blue-600 rounded-md gap-5 group flex-shrink-0 min-w-[200px]"
                key={index}
              >
                <div className="w-60 h-auto rounded-md cursor-pointer bg-blue-300 my-3 relative flex-shrink-0">
                  <img
                    src={anime.img}
                    alt=""
                    className="p-3 w-[300px] h-[300px] rounded-md"
                  />
                  {/* Overlay biru */}
                  <div className="absolute left-0 bottom-0 right-0 top-0 bg-gradient-to-t from-[#98D8EF] via-[#98D8EF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md"></div>
                  {/* Overlay tiitle */}
                  <div className="absolute left-0 right-0 bottom-0 top-3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-center font-bold text-2xl text-white z-10">
                    {" "}
                    {anime?.title || "No Title"}
                  </div>
                  <Link
                    // apaan cokk kenapa berubah tadi pake link sekarang pake tittle
                    to={`/detail/${anime?.title}`}
                    className="text-white hover:underline absolute left-0 bottom-0 right-0 top-1/2 text-center z-50 opacity-0 group-hover:opacity-100 "
                  >
                    View Details
                    {/* {console.log("ini link", anime?.link)} */}
                  </Link>
                  <p className="text-center  font-bold text-white truncate">
                    {anime.title}
                  </p>
                  <div className="flex justify-evenly gap-3 text-white font-semibold">
                    <p>Chapter</p>
                    <p>Type</p>
                  </div>
                  <div className="flex justify-evenly gap-3 p-2 text-white font-semibold">
                    <p>{anime.chapter}</p>
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
        <p className="text-center font-bold text-2xl text-white">{page}</p>
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

export default LatesAnime;
