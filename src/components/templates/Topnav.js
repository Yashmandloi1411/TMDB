import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      //   console.log(data);
      if (data && data.results) {
        setSearches(data.results);
      } else {
        setSearches([]);
      }
    } catch (err) {
      console.log("Error:", err);
      setSearches([]);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      GetSearches();
    } else {
      setSearches([]);
    }
  }, [query]);

  return (
    <div className="w-[50%] h-[10vh] relative flex justify-center items-center ml-48 ">
      <i className="text-3xl text-zinc-400 ri-search-2-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="mx-10 w-96 h-7 p-5 text-zinc-200 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {/* cross icon tabi dekhaga jab chara ho */}
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl text-zinc-400 ri-close-fill"
        ></i>
      )}

      <div className="z-[100] w-[50%] max-h-[60vh] absolute bg-zinc-200 top-[100%]  overflow-auto">
        {searches.map((s, i) => (
          <Link
            to={`${s.media_type}/details/${s.id}`}
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 p-10 w-[100%] flex justify-start items-center border-b-2 border-zinc-100"
          >
            {s.backdrop_path ? (
              <img
                className="w-[15vh] h-[15vh] object-cover rounded mr-10"
                src={`https://image.tmdb.org/t/p/original/${
                  s.backdrop_path || s.profile_path
                }`}
                alt={s.name || s.title || s.original_name || s.original_title}
              />
            ) : (
              <img
                className="w-[15vh] h-[15vh] object-cover rounded mr-10"
                src="/noImage.jpg"
                alt="Default"
              />
            )}
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "../../utils/axios";
// import { useEffect } from "react";

// function Topnav() {
//   const [query, setQuery] = useState("");

//   const [searches, setSearches] = useState([]);

//   //   console.log(query);

//   const GetSearches = async () => {
//     try {
//       const { data } = await axios.get(`/search/multi?query=${query}`);
//       console.log(data);
//       if (data && data.result) {
//         setSearches(data.result);
//       } else {
//         setSearches([]);
//       }
//     } catch (err) {
//       console.log("ERRR");
//       setSearches([]);
//     }
//   };

//   useEffect(() => {
//     if (query.length > 0) {
//       GetSearches();
//     } else {
//       setSearches([]);
//     }
//   }, [query]);

//   return (
//     <div className="w-full h-[10vh] relative flex justify-start  mt-2 ">
//       <i class="text-3xl text-zinc-400 ri-search-2-line"></i>
//       <input
//         onChange={(e) => setQuery(e.target.value)}
//         value={query}
//         className="mx-10 w-96 h-7 p-5 text-zinc-200 text-xl outline-none border-none bg-transparent"
//         type="text"
//         placeholder="Search anything"
//       />
//       {/* cross icon tabi dekhaga jab chara ho*/}
//       {query.length > 0 && (
//         <i
//           onClick={() => setQuery("")}
//           class="text-3xl text-zinc-400 ri-close-fill"
//         ></i>
//       )}

//       <div className="w-[100%] max-h-[60vh] absolute bg-zinc-200 top-[100%] overflow-auto ">
//         {searches.map((s, i) => (
//           <Link
//             key={i}
//             className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600  p-10 w-[100%] flex justify-start items-center border-b-2 border-zinc-100 "
//           >
//             {s.backdrop_path ? (
//               <img
//                 className="w-[10vh] h-[10vh] object-cover rounded mr-10"
//                 src={`https://image.tmdb.org/t/p/original/${s.backdrop_path}`}
//                 alt=""
//               />
//             ) : (
//               <div className="w-[10vh] h-[10vh] flex justify-center items-center bg-gray-300 text-black rounded mr-10">
//                 No Image
//               </div>
//             )}

//             <span>
//               {s.name || s.title || s.original_name || s.original_title}
//             </span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Topnav;
