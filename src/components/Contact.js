import React from "react";

import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-2xl text-zinc-400 font-semibold top-0 left-0 bg-white">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        Contact
      </div>
      <div className="flex flex-row w-full gap-40 bg-white justify-center ">
        <div className="border border-solid rounded-lg w-[40%] h-[60%] mt-14 mr-52">
          <h1 className="bg-[#8ee0f7]  p-4">FAQ</h1>
          <h1 className="hover:bg-zinc-300   cursor-pointer p-3">
            Our History
          </h1>
          <h1 className=" cursor-pointer bg-zinc-300 text-blue-300  p-4">
            Get In Touch
          </h1>
          <h1 className="hover:bg-zinc-300 cursor-pointer p-3">
            Logos& Attribution
          </h1>
          <h1 className="hover:bg-zinc-300   cursor-pointer p-3">General</h1>
          <h1 className="hover:bg-zinc-300   cursor-pointer p-3">Account</h1>
          <h1 className="hover:bg-zinc-300  cursor-pointer  p-3">Website</h1>
        </div>
        <div className="mt-14 mr-11">
          <div className="mb-4">
            <h1 className="font-bold mb-3 text-2xl">Get In Touch</h1>
            <p className="font-medium">General Support</p>
            <hr className="mt-1" />
            <p>
              If you're looking for some help using TMDB, the best place to get
              support is our{" "}
              <span className="text-blue-300 font-bold cursor-pointer">
                forums.
              </span>
            </p>
          </div>
          <div className="mb-4">
            <h1 className="font-medium mb-2">Contact Sales</h1>
            <hr className="mt-1" />
            <p>
              If you or your business would like to talk to our sales team about
              using TMDB commercially,{" "}
              <span className="text-blue-300 font-bold cursor-pointer">
                click here.
              </span>
            </p>
          </div>
          <div>
            <h1 className="font-medium mb-2">General Inquiry</h1>
            <hr />
            <p>
              If you have something else (non sales related) to go over, feel
              free to contact us directly with this{" "}
              <span className="text-blue-300 font-bold cursor-pointer">
                form.
              </span>
            </p>
          </div>
          <div className="flex  items-start space-x-4 gap-7">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="contact"
              className="mt-5 w-[150px] h-[150px]"
            />
            <button className="mt-16 rounded-lg bg-zinc-400 text-blue-500 p-4 ">
              Hi Yash Mandloi !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
