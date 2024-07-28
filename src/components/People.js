import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

import Topnav from "./templates/Topnav";

import Cards from "./partials/Cards";

import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function People() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("popular");

  const [person, setPerson] = useState([]);

  const [page, setPage] = useState(1);

  const [hasMore, sethasMore] = useState(true);

  const GetPeople = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
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
    if (person.length === 0) {
      GetPeople();
    } else {
      setPage(page + 1);
      setPerson([]);
      GetPeople();
    }
  };

  useEffect(() => {
    //GetTrending();
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="px-5 w-full flex items-center ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          Person
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <Topnav />

        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPeople}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
}

export default People;
