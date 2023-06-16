import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };
  return (
    <div className="pt-4 py-3 flex justify-between items-center md:items-end px-4 lg:px-0 border-b">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="block md:hidden">
      <FaTimes
          className={isOpenMenu ? "md:hidden w-6 h-6 text-black" : "hidden"}
          onClick={toggleMenu}
        ></FaTimes>
        <FaBars
          className={!isOpenMenu ? "md:hidden w-6 h-6 text-black" : "hidden"}
          onClick={toggleMenu}
        ></FaBars>
      </div>
      <div className={`space-x-5 hidden md:flex ${isOpenMenu ? '' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "isActive" : "unActive-nav")}
        >
          News Feeds
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "isActive" : "unActive-nav")}
        >
          Events
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) => (isActive ? "isActive" : "unActive-nav")}
        >
          Jobs
        </NavLink>
      </div>
      <div className="px-2 py-1 border rounded-full items-center h-8 hidden md:flex w-[20%]">
        <input type="search"  className="w-full px-1 outline-none  rounded-2xl text-sm font-serif" placeholder="Search..."/>
        <FaSearch className="w-4 h-4 text-[#0d6efd]"></FaSearch>
      </div>
    </div>
  );
};

export default Navbar;
