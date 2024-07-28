import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

import Topnav from "./templates/Topnav";
import Dropdown from "./partials/Dropdown";

import Cards from "./partials/Cards";

import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Popular() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("movie");

  const [popular, setPopular] = useState([]);

  const [page, setPage] = useState(1);

  const [hasMore, sethasMore] = useState(true);

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
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
    if (popular.length === 0) {
      GetPopular();
    } else {
      setPage(page + 1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    //GetTrending();
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-5 w-full flex items-center ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Popular
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />

        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Popular;
