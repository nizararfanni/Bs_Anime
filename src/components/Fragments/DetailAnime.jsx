import React from "react";
import { UseGetDetailAnime } from "../../hooks/UseGetAnime";

const DetailAnime = () => {
  const { detailAnimes, isLoading } = UseGetDetailAnime(100); // Hook dipanggil dengan benar di dalam komponen

  if (isLoading) {
    return (
      // Perlu "return" untuk rendering elemen saat loading
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        Loading...
      </div>
    );
  }
  if (!detailAnimes) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        No detail available
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gray-100 via-gray-300/50 to-gray-300 min-h-[400px] w-full flex">
      <div className="w-full flex flex-col">
        <div className="p-2 font-semibold text-2xl">
          <h2>Detail Anime</h2>
        </div>
        <div className="flex flex-col p-4  justify-center items-center min-h-screen mx-auto">
          {detailAnimes && (
            <div className="m-3">
              <h3 className="text-3xl font-bold">
                Judul:{detailAnimes?.judul}
              </h3>
              <img
                src={detailAnimes?.img}
                alt=""
                className="items-center w-32 h-40"
              />
              <p className="text-sm font-semibold">
                Type: {detailAnimes?.jenis}
              </p>
              <p className="text-sm font-semibold">
                Rate: {detailAnimes?.ratting}
              </p>
              <p className="text-sm font-semibold">
                judul lain :{detailAnimes?.judul_alternatif}
              </p>
              <div className="flex justify-between items-center text-sm font-semibold">
                <p>Deskripsi:{detailAnimes?.sinopsis}</p>
                <p>Chapter :{detailAnimes?.chapter[0].url}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;
