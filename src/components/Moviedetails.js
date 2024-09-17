import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncloadmovie, removemovie } from "../store/actions/movieAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./partials/HorizontalCards";

function Moviedetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();

  const { info } = useSelector((state) => state.movie);

  //console.log("Moviedetails component rendered with id:", id);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect called");
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(${`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "150vh",
      }}
      className="relative w-screen h-[140vh] px-[10%] overflow-x-hidden overflow-y-hidden"
    >
      {/* part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDB
        </a>
      </nav>

      {/* part 2 poster and details */}
      <div className="w-full flex relative">
        <img
          className="mx-10 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="content text-white">
          <h1 className="mx-10  text-5xl  font-black ">
            {" "}
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <small className="text-2xl font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-1 mb-3 flex  items-center gap-x-3">
            <span className=" rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6 ">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-xl mb-1 mt-1">Overview</h1>
          <p>{info.detail.overview}</p>

          <div className="absolute mt-9 mb-5 ml-24">
            <Link
              className="p-5  bg-[#6556CD] rounded-lg"
              to={`${pathname}/trailer`}
            >
              <i className="text-xl ri-play-large-fill mr-3"></i>
              Play Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* part 3 Available on Platforms */}

      <div className="w-[80%] flex flex-col gap-y-4">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platforms</h1>
            {info.watchproviders.flatrate.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w) => (
              <img
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part 4 recommendations and similar stuf */}
      <hr className="mt-24" />
      <h1 className="text-2xl font-semibold text-white ">
        Recommendations & Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
        cardStyle={{
          height: "130%",
          width: "170%",
        }}
      />
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default Moviedetails;
