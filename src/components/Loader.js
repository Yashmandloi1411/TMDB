import React from "react";

function Loader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[50%] object-cover" src="/loader.gif" alt="" />
    </div>
  );
}

export default Loader;
