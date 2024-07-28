import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { asyncloadperson, removeperson } from "../store/actions/personAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./partials/HorizontalCards";

function PersonDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();

  const { info } = useSelector((state) => state.person);

  console.log("persondetails component rendered with id:", id);

  const dispatch = useDispatch();

  const [category, setCategory] = useState("movie");

  console.log("printing perosn details");
  console.log(info);

  useEffect(() => {
    console.log("useEffect called");
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  return info ? (
    <div className="px-[10%] h-[150vh] w-screen bg-[#1F1E24] overflow-x-hidden">
      {/* part 1 navigation */}
      <nav className=" h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full flex ">
        {/* part 2 left Poster and detail */}
        <div className="w-[30%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path || info.detail.backdrop_path
            }`}
            alt=""
          />
          <hr className="mt-7 mb-3 border-none h-[2px] bg-zinc-500" />

          {/* social media handler */}
          <div className="text-xl text-white flex gap-x-4">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>

            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>

          {/* personal Information */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-3 ">
            Person Info
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold  ">
            Known For: {info.detail.known_for_department}{" "}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Gender : {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Birthday: <small>{info.detail.birthday}</small>
          </h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Deathday: {info.detail.deathday ? info.detail.deathday : "Alive"}
          </h1>

          <h1 className="text-zinc-400 font-semibold  "></h1>

          <h1 className="text-lg text-zinc-400 font-semibold mt-3 ">
            Place Of Birth: <small>{info.detail.place_of_birth}</small>
          </h1>

          <h1 className="text-zinc-400 font-semibold  "></h1>
        </div>

        {/* part 3 right Details and information */}
        <div className="w-[80%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5 ">
            {info.detail.name}
          </h1>

          <h1 className="text-xl text-zinc-400 font-semibold  ">Biography</h1>
          <p className="text-zinc-400 mt-3">
            {info.detail.biography.substring(0, 500)}...
          </p>

          <h1 className="mt-5 text-lg text-zinc-400 font-black my-3 ">
            Known For
          </h1>

          <HorizontalCards
            data={info.combinedCredits.cast}
            cardStyle={{
              height: "130%",
              width: "170%",
            }}
          />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}
export default PersonDetails;
