import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Loader from "../Loader";
import Container from "postcss/lib/container";

function HorizontalCards({ data, cardStyle }) {
  return (
    <div className="w-[70%] flex  overflow-y-hidden p-5 " style={cardStyle}>
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className=" min-w-[15%] h-[49vh] bg-zinc-900 mr-5 mb-5"
          >
            <div className="bg-zinc-900">
              <img
                className="w-full h-[35%] object-cover"
                src={
                  d.backdrop_path || d.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        d.backdrop_path || d.profile_path
                      }`
                    : "/noImage.jpg"
                }
                alt=""
              />
              <h1 className="text-xl font-semibold text-white">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="w-[92%] mt-2 text-white pl-1">
                {d.overview?.slice(0, 50)}...
                <span className="text-zinc-500">More</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-white font-black text-center">
          Nothing to Show
        </h1>
      )}
    </div>
  );
}

export default HorizontalCards;
