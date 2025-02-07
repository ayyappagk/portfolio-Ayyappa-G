import React from "react";
import avatarImg from "../../assets/profile.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter mb-6">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        Results driven and highly motivated Software Engineer with 2 years of experience in scalable solutions for enterprise applications. Seeking opportunities in front end, full stack roles to contribute development skills in dynamic enterprise environment.
        </p>
        <a href="https://drive.google.com/file/d/1edHFFUe8omCuo5O6GE6Hh_OiWvtpS4fr/view?usp=drive_link">
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Resume
        </button>
        </a>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
