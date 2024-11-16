import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  //console.log(data);
  //console.log(title);
  return (
    <div className="flex flex-wrap w-full h-full bg-[#1F1E24] p-[5%] mt-1">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className=" relative w-[17%] mr-[3%]"
          key={i}
        >
          <img
            className="w-[35vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]  object-cover"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : "/noImage.gif"
            }
            alt=""
          />

          <h1 className="mt-1 mb-3 text-lg text-zinc-300  font-semibold">
            {" "}
            {c.name || c.title || c.original_name || c.original_title}
          </h1>

          {c.vote_average && (
            <div className="absolute right-[0] bottom-[30%] rounded-full  bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
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
