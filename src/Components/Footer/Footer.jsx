import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-xl md:text-6xl font-bold">Contact Me</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          ayyappagk24@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          www.linkedin.com/in/ayyappa-gandikota-025383168/
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          https://github.com/ayyappagk
        </li>
      </ul>
    </div>
  );
};

export default Footer;
