import React from "react";
import { UseGetDetailAnime } from "../../hooks/UseGetAnime";
import { Link, useParams } from "react-router-dom";

const DetailAnime = () => {
  // slug id dari path detail:id
  const { id } = useParams();
  // id dari slug detail
  const { detailAnimes, isLoading } = UseGetDetailAnime(id); 

  if (isLoading) {
    return (
      // Perlu "return" untuk rendering elemen saat loading
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }
  {
    if (!detailAnimes) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
        No detail available
      </div>
    );
  }
}
  // console.log("isi detail", detailAnimes?.chapter);
  const cleanUrl = (rawUrl) => {
    if (!rawUrl) return "";
    return rawUrl.replace("https://komikindo3.com/", "");
  };
  
  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-300/50 to-gray-300 min-h-screen w-full flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" font-semibold text-2xl">
          <h2>Detail Anime</h2>
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen mx-auto container p-5">
          {detailAnimes && (
            <div className="m-3 flex justify-center flex-col items-center ">
              <h3 className="text-3xl font-bold">
                Judul:{detailAnimes?.judul}
              </h3>
              <img
                src={detailAnimes?.img}
                alt=""
                className="items-center w-32 h-40"
              />
              <p className="text-sm font-semibold">
                judul lain :{detailAnimes?.judul_alternatif}
              </p>
              <div className="grid grid-cols-3 gap-3 py-3">
                <div className="col-span-1">
                  <p className="text-sm font-semibold ">
                    Type: {detailAnimes?.jenis}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-semibold">
                    Rate: {detailAnimes?.ratting}
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="text-sm font-semibold">
                    Genre: {detailAnimes?.genre[0]},{detailAnimes?.genre[1]}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm font-semibold">
                <p>Sinopsis:{detailAnimes?.sinopsis}</p>
              </div>
              {/* daftar chapter */}
              <div className="grid grid-cols-2 gap-4">
                {detailAnimes?.chapter
                  .sort((a, b) => {
                    const chapterA = parseInt(a.chapter.split(" ")[1]);
                    const chapterB = parseInt(b.chapter.split(" ")[1]);
                    return chapterA - chapterB;
                  })
                  .map((anime, index) => (
                    <div
                      key={index}
                      className="p-2 border border-gray-300 rounded"
                    >
                      <p>
                        <Link
                          to={`/baca/${cleanUrl(anime.url)}`} // Ganti anime.chapter[0].url jadi anime.url
                          className="text-blue-500 hover:underline"
                        >
                          {anime.chapter}
                        </Link>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;
