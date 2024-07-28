import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import Dropdown from "./partials/Dropdown";

import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);

  const [page, setPage] = useState(1);

  const [hasMore, sethasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
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
    if (trending.length === 0) {
      GetTrending();
    } else {
      setPage(page + 1);
      setTrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    //GetTrending();
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-5 w-full flex items-center ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Trending
        </h1>
        <Topnav />
        <Dropdown
          title="Category"
          options={["movies", "tv", "all"]}
          func={(e) => setCategory(e.target.value)}
        />

        <div className="w-[2%]"></div>
        <Dropdown
          title="Duration"
          options={["Week", "Day"]}
          func={(e) => setDuration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default Trending;
