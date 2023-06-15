import React from "react";
import Marquee from "react-fast-marquee";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SubNavbar = () => {
  return (
    <div className="pt-1 pb-3 border-b flex justify-between items-center px-4 lg:px-0">
      <div className="w-fit flex items-center gap-2">
        <button className="w-24 py-1 bg-[#616161] text-white text-sm duration-200 hover:bg-[#0d6efd] font-serif">
          New Update
        </button>
        <p className="text-sm font-serif hidden md:block ">Betting against meme stocks could get you seriously burned</p>
      </div>
      <div className="flex gap-3 h-full items-center">
        <FaFacebookF className="w-4 h-4 text-[#616161] hover:text-[#0d6efd] duration-100"></FaFacebookF>
        <FaTwitter className="w-4 h-4 text-[#616161] hover:text-[#0d6efd] duration-100"></FaTwitter>
        <FaInstagram className="w-4 h-4 text-[#616161] hover:text-[#0d6efd] duration-100"></FaInstagram>
        <FaLinkedinIn className="w-4 h-4 text-[#616161] hover:text-[#0d6efd] duration-100"></FaLinkedinIn>
      </div>
    </div>
  );
};

export default SubNavbar;
