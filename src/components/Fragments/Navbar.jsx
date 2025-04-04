import React, { useState } from "react";
import ListItems from "../Elements/ListItems";
import Button from "../Elements/Button";
import Tittle from "../Elements/Tittle";
import { UseSearchAnime } from "../../hooks/UseGetAnime";
import SearchAnimeList from "./SearchAnimeList";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [searchAnime, setSearchAnime] = useState("");
  const { searchAnimeId, isLoading, error } = UseSearchAnime(searchAnime);
  const navigate = useNavigate();

  // handle search anime dereksi ketikan
  const handleSeacrhAnime = (e) => {
    setSearchAnime(e.target.value);
    // console.log("search", searchAnime);
  };

  // Handle keydown enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchAnime.trim()) {
      navigate(`/search/${encodeURIComponent(searchAnime)}`);
    }
  };

  // handle open and close navbar
  const handelNavbarIsOpen = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };

  // ambil data dari local storage
  const getUserName = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-[#F7F7F7] mx-auto flex lg:flex-row shadow-lg p-2 w-full fixed top-0 left-0 right-0 z-10">
      <div className="flex lg:flex-row items-center justify-between w-full p-1 flex-col ">
        <Tittle handelNavbarIsOpen={handelNavbarIsOpen} />
        <div
          className={`hidden lg:flex flex-col md:flex-col lg:flex-row gap-4 text-center items-center justify-center font-semibold transform transition duration-300 ease-in-out  h-auto`}
        >
          <div className="relative">
            <SearchAnimeList
              error={error}
              handleKeyDown={handleKeyDown}
              handleSeacrhAnime={handleSeacrhAnime}
              isLoading={isLoading}
              searchAnime={searchAnime}
              searchResults={searchAnimeId}
            ></SearchAnimeList>
          </div>
          <ListItems
            Class={"hover:underline hover:bg-blue-500 active:bg-blue-500"}
          >
            <Link to="/home">Home</Link>
          </ListItems>
          <ListItems Class={"hover:underline hover:bg-blue-500"}>
            Anime
          </ListItems>
          <ListItems Class={"hover:underline hover:bg-blue-500"}>
            Trending
          </ListItems>
          <ListItems Class={"hover:underline hover:bg-blue-500"}>
            Category
          </ListItems>
          <Button Class="bg-gray-300 hover:bg-gray-400"> Aplikasi </Button>

          <Button
            Class="bg-pink-500 hover:bg-pink-600 text-white "
            to={"/premium"}
          >
            Premium
          </Button>
          {getUserName ? (
            <div className="bg-pink-500 px-2 py-1 hover:bg-pink-600 rounded-md font-semibold text-white ">
              {/* ambil username aja untuk di tampilkan  */}
              {getUserName.username}
            </div>
          ) : (
            <Button Class="bg-black text-white" to={"/login"}>
              {" "}
              Masuk{" "}
            </Button>
          )}
        </div>

        {navbarIsOpen && (
          <div
            className={` flex flex-col md:flex-col lg:flex-row gap-4 text-center items-center justify-center font-semibold transform transition duration-300 ease-in-out ${
              navbarIsOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            } h-auto`}
          >
            <div className="relative">
              <SearchAnimeList
                error={error}
                handleKeyDown={handleKeyDown}
                handleSeacrhAnime={handleSeacrhAnime}
                isLoading={isLoading}
                searchAnime={searchAnime}
                searchResults={searchAnimeId}
              ></SearchAnimeList>
            </div>
            <ListItems
              Class={"hover:underline hover:bg-blue-500 active:bg-blue-500"}
            >
              Home
            </ListItems>
            <ListItems
              Class={"hover:underline hover:bg-blue-500 active:bg-blue-500"}
            >
              Anime
            </ListItems>
            <ListItems
              Class={"hover:underline hover:bg-blue-500 active:bg-blue-500"}
            >
              {" "}
              Trending
            </ListItems>
            <ListItems
              Class={"hover:underline hover:bg-blue-500 active:bg-blue-500"}
            >
              Category
            </ListItems>
            <Button Class="bg-gray-300 hover:bg-gray-400"> Aplikasi </Button>
            <Button
              Class="bg-pink-500 hover:bg-pink-600 text-white"
              to={"/premium"}
            >
              Premium
            </Button>
            {getUserName ? (
              <div className="bg-pink-500 px-2 py-1 hover:bg-pink-600 rounded-md font-semibold text-white ">
                {/* ambil username aja untuk di tampilkan  */}
                {getUserName.username}
              </div>
            ) : (
              <Button Class="bg-black text-white" to={"/login"}>
                {" "}
                Masuk{" "}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
