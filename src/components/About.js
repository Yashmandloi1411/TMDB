import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="top-1 left-2 absolute">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>
          About
        </h1>
      </div>

      <img
        src="about.png"
        alt="description"
        className="w-full h-full  object-scale-down"
      />
      <div className="absolute text-5xl text-white top-20">
        <h1 className="text-6xl font-bold">Let's talk about TMDB</h1>
      </div>

      <div className="absolute  p-10 rounded-lg top-44 w-[80%]">
        <p className="text-xl text-white leading-8 font-medium">
          The Movie Database (TMDb) is a{" "}
          <span className="underline decoration-[#d40242] ">
            community built
          </span>{" "}
          movie and TV database. Every piece of data has been added by our
          amazing community dating back to 2008. TMDb's strong{" "}
          <span className="underline decoration-[#d40242]">
            international focus
          </span>
          and breadth of data is largely unmatched and something we're
          incredibly proud of. Put simply, we live and breathe community and
          that's precisely what makes us different.
        </p>

        <h2 className="text-3xl text-white text-center mb-4">
          The TMDB advantage
        </h2>

        <ul className="list-none mb-10 text-white text-xl">
          <li className="mb-4">
            <span className="text-[#d40242] font-bold text-3xl leading-0 p-4">
              1
            </span>
            Along with extensive metadata for movies, TV shows and people, we
            also offer one of the best selections of high resolution posters and
            fanart. On average, over 1,000 images are added every single day.
          </li>
          <li>
            <span className="text-[#d40242] font-bold text-3xl leading-0 p-4">
              2
            </span>
            We're international. While we officially support 39 languages we
            also have extensive regional data. Every single day TMDB is used in
            over 180 countries.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
