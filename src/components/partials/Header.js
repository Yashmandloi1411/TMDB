import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  // Safeguard against undefined or missing properties
  const backdropPath = data?.backdrop_path || data?.profile_path || "";
  const title =
    data?.name ||
    data?.title ||
    data?.original_name ||
    data?.original_title ||
    "Untitled";

  // Safeguard for overview and slicing only if overview is defined
  const overview = data?.overview
    ? `${data.overview.slice(0, 200)}...`
    : "No description available.";

  const mediaType = data?.media_type
    ? data.media_type.toUpperCase()
    : "UNKNOWN";
  const releaseDate = data?.release_date || "No Information";
  const mediaId = data?.id || "";

  return (
    <div
      className="w-full h-[50vh] flex flex-col justify-between items-start p-[3%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${backdropPath})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "79vw",
        height: "70vh",
      }}
    >
      <h1 className="w-[60%] text-5xl font-black text-white">{title}</h1>

      <div className="flex-grow flex flex-col justify-center w-[70%]">
        <p className="w-[70%] mt-5 text-white flex-grow flex-col justify-center">
          {overview}
          <Link
            to={`/${mediaType.toLowerCase()}/details/${mediaId}`}
            className="text-blue-400"
          >
            More
          </Link>
        </p>
        <p className="text-white">
          <i className="text-yellow-500 ri-megaphone-fill"></i>
          {releaseDate}
          <i className="ml-5 text-yellow-500 ri-album-fill"></i>
          {mediaType}
        </p>
      </div>

      <Link
        to={`/${mediaType.toLowerCase()}/details/${mediaId}/trailer`}
        className="p-4 rounded text-white bg-[#6556CD] mt-1"
      >
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;

// import React from "react";

// import { Link } from "react-router-dom";

// function Header({ data }) {
//   //   console.log(data);
//   return (
//     <div
//       className="w-full h-[50vh] flex flex-col justify-between items-start p-[3%]  "
//       style={{
//         background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(${`https://image.tmdb.org/t/p/original/${
//           data.backdrop_path || data.profile_path
//         }`})`,
//         backgroundPosition: "top 10%",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         width: "79vw",
//         height: "70vh",
//       }}
//     >
//       <h1 className="w-[60%] text-5xl font-black text-white ">
//         {data.name || data.title || data.original_name || data.original_title}
//       </h1>

//       <div className="flex-grow flex flex-col justify-center w-[70%]">
//         <p className="w-[70%] mt-5 text-white  flex-grow flex-col justify-center">
//           {data.overview.slice(0, 200)}...
//           <Link
//             to={`/${data.media_type}/details/${data.id}`}
//             className="text-blue-400"
//           >
//             More
//           </Link>
//         </p>
//         <p className="text-white  ">
//           <i className="text-yellow-500 ri-megaphone-fill"></i>
//           {data.release_date || "No Information"}
//           <i className="ml-5 text-yellow-500 ri-album-fill"></i>
//           {data.media_type.toUpperCase()}
//         </p>
//       </div>

//       <Link
//         to={`/${data.media_type}/details/${data.id}/trailer`}
//         className="p-4 rounded text-white  bg-[#6556CD] mt-1"
//       >
//         Watch Trailer
//       </Link>
//     </div>
//   );
// }

// export default Header;
