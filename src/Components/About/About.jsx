import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          {/* <img className="md:h-80" src={AboutImg} alt="About img" /> */}

          <ul>
            <div className="flex gap-3 py-4">
              <span className="w-126">
                <h1 className="text-xl md:text-3xl font-semibold leading-normal">
                  Software Engineer
                </h1>
                <p className="text-sm md:text-2xl leading-tight">
                Passoinate about developing scalable web applications and continuous learner to keep upto date with the latest evolving technologies.Seeking opportunities for entry level web developer roles to kick-start my career in web development.I am passionate about learning new things, adding creativity there by exhibiting the value additon qualities to the organization.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
