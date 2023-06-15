import React from "react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="pt-4 py-3 flex justify-between items-end">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="space-x-5 flex ">
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
      <div className="px-2 py-1 border rounded-full  flex items-center h-8">
        <input type="search"  className="w-full px-1 outline-none  rounded-2xl text-sm font-serif" placeholder="Search..."/>
        <FaSearch className="w-4 h-4 text-[#0d6efd]"></FaSearch>
      </div>
    </div>
  );
};

export default Navbar;
