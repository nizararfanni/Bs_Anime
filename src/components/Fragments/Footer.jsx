import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Foot from "../Elements/FootEleemennt";

const Footer = () => {
  return (
    <div className="min-h-[200px] w-full bg-[#F7F7F7] ">
      <div className="grid md:grid-cols-3 grid-cols-1  ">
        <Foot
          title={"NZ STATION"}
          description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          perferendis ratione nulla, sapiente deleniti, explicabo minima odio
          quasi aut aperiam neque pariatur vel? Saepe dicta corrupti atque
          nostrum eum sit`}
        ></Foot>
        <Foot title={"contact us"}>
          <div className="flex justify-evenly ">
            <div className="text-2xl font-semibold text-black group-hover:text-white">
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
        </Foot>
        <Foot
          title={"About Us"}
          description={` Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          perferendis ratione nulla, sapiente deleniti, explicabo minima odio
          quasi aut aperiam neque pariatur vel? Saepe dicta corrupti atque
          nostrum eum sit`}
        ></Foot>
      </div>
    </div>
  );
};

export default Footer;
