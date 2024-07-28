import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  //console.log(data);
  //console.log(title);
  return (
    <div className="flex flex-wrap w-full bg-[#1F1E24] overflow-x-hidden overflow-y-auto">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className=" relative w-[25vh] mr-[5%]"
          key={i}
        >
          <img
            className="mx-10 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : "/noImage.gif"
            }
            alt=""
          />

          <h1 className="mx-10  text-2xl text-zinc-300 mt-3 font-semibold">
            {" "}
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[-35%] bottom-[55%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(c.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
