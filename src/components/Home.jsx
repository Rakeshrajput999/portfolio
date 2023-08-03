import React from "react";
import {HiOutlineArrowCircleRight } from  "react-icons/hi"
import { Link } from "react-scroll";

const Home = () => {
  return <div name="Home" className="tw-h-screen tw-w-full tw-bg-slate-900 tw-px-4">
   <div className="tw-max-w-[1000px] tw-mx-auto tw-px-0 tw-flex tw-flex-col tw-justify-center tw-h-full ">
    <p className="tw-text-purple-600">Hi,My name is </p>
    <h1 className="tw-text-4xl sm:tw-text-7xl tw-font-bold tw-text-zinc-300">Rakesh Rajput</h1>
    <h2 className=" tw-text-4xl sm:tw-text-7xl tw-font-bold tw-text-zinc-500 tw-my-1">I'm a Frontend Developer, </h2>
    <p className="tw-text-zinc-600">I am a frontend Developer specializing in building (and occasionally designing ) exceptional digital experiences.
    currently i am focused on building responsive web/ mobile / PWA application. 
    </p>
    <div className="">
      <Link to="Work" smooth={true} duration={1000} className="tw-text-white  tw-px-6 tw-py-3 tw-my-2 tw-flex tw-items-center tw-gap-1 hover:tw-bg-orange-900 hover:tw-border-orange-800 tw-w-1/4 ">View Projects <HiOutlineArrowCircleRight className=" tw-text-xl" /></Link>

    </div>

   </div>
  </div>;
};

export default Home;
