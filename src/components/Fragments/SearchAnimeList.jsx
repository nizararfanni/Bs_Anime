import React from "react";
import { Link } from "react-router-dom";

const SearchAnimeList = ({
  handleKeyDown,
  searchAnime,
  handleSeacrhAnime,
  searchResults,
  isLoading,
  error,
}) => {
  return (
    <div className="relative">
      {/* inputan search */}
      <input
        type="text"
        value={searchAnime}
        onChange={handleSeacrhAnime}
        onKeyDown={handleKeyDown}
        placeholder="Search anime..."
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
      />

      {/* tangkap value inputan search  */}
      {searchAnime && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
          {isLoading && <div className="p-2 text-gray-500">Loading...</div>}
          {error && <div className="p-2 text-red-500">Error: {error}</div>}
          {/* tampilkan hasil pencarian */}
          {!isLoading && !error && searchResults?.length > 0
            ? searchResults.map((anime, index) => (
                <Link
                  key={index}
                  to={`/detail/${anime.link}`}
                  className="border-b border-gray-300 p-2 hover:bg-gray-100 flex items-center gap-2"
                >
                  {anime.img && (
                    <img
                      src={anime.img}
                      alt={anime.title}
                      className="w-10 h-10 object-cover rounded"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{anime.title}</p>
                    <div className="flex justify-evenly">
                      <p className="text-sm text-gray-500">
                        {anime.type || "Anime"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {anime.ratting || "Unknown "}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            : !isLoading &&
              !error &&
              searchAnime && (
                <div className="p-2 text-gray-500">No results found</div>
              )}
        </div>
      )}
    </div>
  );
};

export default SearchAnimeList;
