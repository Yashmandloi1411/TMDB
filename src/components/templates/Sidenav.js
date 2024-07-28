import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="w-[130%] h-full border-r-2 border-zinc-400 p-11 ">
      <h1 className=" text-2xl text-white font-bold ">
        <i className="text-[#6556CD] ri-tv-fill mr-3"></i>
        {/* <span className="text-2xl ">SCSDB</span> */}
        <span className="text-2xl ">TMDB</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-2 ">
        <h1 className="text-white font-semibold mt-10 mb-5 px-4">New Feeds</h1>

        <Link
          to="/trending"
          className="flex gap-x-1 hover:bg-[#6556CD]  hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="flex  gap-x-1 hover:bg-[#6556CD]  hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="ri-magic-fill"></i> Popular
        </Link>
        <Link
          to="/movie"
          className="flex  gap-x-1 hover:bg-[#6556CD]  hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link
          to="/tvshow"
          className="flex  gap-x-1 hover:bg-[#6556CD]  hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="ri-tv-2-fill"></i> Tv Show
        </Link>
        <Link
          to="/people"
          className="flex  gap-x-1 hover:bg-[#6556CD]  hover:text-white duration-300 rounded-lg p-5 mb-3"
        >
          <i className="ri-team-fill"></i> People
        </Link>
      </nav>

      <hr className="border-none h-1 bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold mt-10 mb-5">
          Website Information
        </h1>

        <Link
          to="/about"
          className="hover:bg-[#6556CD]  hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="ri-information-fill"></i> About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-[#6556CD]  hover:text-white duration-300 rounded-lg p-5"
        >
          <i className="ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
