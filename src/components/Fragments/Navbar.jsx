import React, { useState } from "react";
import ListItems from "../Elements/ListItems";
import Button from "../Elements/Button";
import Tittle from "../Elements/Tittle";

const Navbar = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  const handelNavbarIsOpen = () => {
    setNavbarIsOpen(!navbarIsOpen);
  };
  return (
    <div className="bg-[#F7F7F7] mx-auto flex lg:flex-row shadow-lg p-2 w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex lg:flex-row items-center justify-between w-full p-1 flex-col overflow-hidden">
        <Tittle handelNavbarIsOpen={handelNavbarIsOpen} />
        <div
          className={`hidden lg:flex flex-col md:flex-col lg:flex-row gap-4 text-center items-center justify-center font-semibold transform transition duration-300 ease-in-out  h-auto` }
        >
          <ListItems>Home</ListItems>
          <ListItems>Anime</ListItems>
          <ListItems>Trending</ListItems>
          <ListItems>Category</ListItems>
          <Button Class="bg-gray-300 hover:bg-gray-400"> Aplikasi </Button>
          <Button Class="bg-gray-300 hover:bg-gray-400"> IsiUlang </Button>
          <Button Class="bg-pink-500 hover:bg-pink-600 text-white">
            Premium
          </Button>
          <Button Class="bg-black text-white"> Masuk </Button>
        </div>

        {navbarIsOpen && (
          <div
            className={`flex flex-col md:flex-col lg:flex-row gap-4 text-center items-center justify-center font-semibold transform transition duration-300 ease-in-out ${
              navbarIsOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            } h-auto`}
          >
            <ListItems>Home</ListItems>
            <ListItems>Anime</ListItems>
            <ListItems>Trending</ListItems>
            <ListItems>Category</ListItems>
            <Button Class="bg-gray-300 hover:bg-gray-400"> Aplikasi </Button>
            <Button Class="bg-gray-300 hover:bg-gray-400"> IsiUlang </Button>
            <Button Class="bg-pink-500 hover:bg-pink-600 text-white">
              Premium
            </Button>
            <Button Class="bg-black text-white"> Masuk </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
