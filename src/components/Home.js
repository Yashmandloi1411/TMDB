import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";

import Topnav from "./templates/Topnav";

import axios from "../utils/axios";
import Header from "./partials/Header";

import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loader from "./Loader";

function Home() {
  const [wallpaper, setwallpaper] = useState(null);

  const [trending, setTrending] = useState(null);

  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomIndex = Math.floor(Math.random() * data.results.length);
      const randomdata = data.results[randomIndex];

      //   console.log("API response:", data);
      setwallpaper(randomdata);
    } catch (err) {
      console.log("Error:", err);
    }
  };
  //   console.log(wallpaper);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);

      setTrending(data.results);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  //console.log(trending);

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
  }, [category, wallpaper]);

  return wallpaper && trending ? (
    <div className="flex  overflow-auto overflow-x-hidden">
      <Sidenav />
      <div className="flex flex-col">
        <Topnav />
        <Header data={wallpaper} />

        <div className="mx-4 mb-5 flex gap-96">
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>

          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Home;
