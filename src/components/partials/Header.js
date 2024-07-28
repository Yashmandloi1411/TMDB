import React from "react";

import { Link } from "react-router-dom";

function Header({ data }) {
  //   console.log(data);
  return (
    <div
      className="w-full h-[50vh] flex flex-col justify-between items-start p-[3%]  "
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(${`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        }`})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "79vw",
        height: "70vh",
      }}
    >
      <h1 className="w-[60%] text-5xl font-black text-white ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      <div className="flex-grow flex flex-col justify-center w-[70%]">
        <p className="w-[70%] mt-5 text-white  flex-grow flex-col justify-center">
          {data.overview.slice(0, 200)}...
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            className="text-blue-400"
          >
            More
          </Link>
        </p>
        <p className="text-white  ">
          <i className="text-yellow-500 ri-megaphone-fill"></i>
          {data.release_date || "No Information"}
          <i className="ml-5 text-yellow-500 ri-album-fill"></i>
          {data.media_type.toUpperCase()}
        </p>
      </div>

      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="p-4 rounded text-white  bg-[#6556CD] mt-1"
      >
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
