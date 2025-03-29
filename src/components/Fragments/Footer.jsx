import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="min-h-[200px] w-full bg-[#F7F7F7]">
      <div className="grid md:grid-cols-3 grid-cols-1 ">
        <div className="col-span-1 p-4 shadow-md m-2 rounded-md">
          <h2 className="font-bold text-2xl text-blue-600 ">NZStation</h2>
          <p className="text-sm font-semibold text-black my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quae.
          </p>
        </div>
        <div className="col-span-1 p-4 shadow-md m-2">
          <h3 className="font-bold text-blue-600 text-2xl text-center mb-2">
            Contact Us
          </h3>
          <div className="flex justify-evenly">
            <div className="text-2xl font-semibold text-black ">
              <FaInstagram />
              <FaWhatsapp />
              <CiFacebook />
            </div>
            <div className="flex flex-col">
              <a
                href="https://www.instagram.com/nzarr_arfan"
                className="hover:underline transform transition duration-300 ease-in-out"
              >
                @Nzarr_arfan
              </a>
              <a
                href="https://wa.me/085713296658"
                className="hover:underline transform transition duration-300 ease-in-out"
              >
                085713296658
              </a>
              <a
                href="https://wa.me/085713296658"
                className="hover:underline transform transition duration-300 ease-in-out"
              >
                nzarr_arfan
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-4 shadow-md m-2 ">
          <h2 className="text-center font-bold text-2xl text-blue-600">
            About
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            perferendis ratione nulla, sapiente deleniti, explicabo minima odio
            quasi aut aperiam neque pariatur vel? Saepe dicta corrupti atque
            nostrum eum sit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
