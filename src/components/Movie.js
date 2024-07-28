import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

import Topnav from "./templates/Topnav";
import Dropdown from "./partials/Dropdown";

import Cards from "./partials/Cards";

import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Movie() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("now_playing");

  const [movie, setMovie] = useState([]);

  const [page, setPage] = useState(1);

  const [hasMore, sethasMore] = useState(true);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
        //console.log(data);
      } else {
        sethasMore(false);
      }

      // setTrending(data.results);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const refreshHandler = async () => {
    if (movie.length === 0) {
      GetMovie();
    } else {
      setPage(page + 1);
      setMovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    //GetTrending();
    refreshHandler();
  }, [category]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-5 w-full flex items-center ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Movie
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          func={(e) => setCategory(e.target.value)}
        />

        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Movie;
