import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-9 flex flex-wrap gap-5">
        <ProjectCard
          title="E-Commerce Web App"
          main="An e-commerce website featuring product listing, cart functionality, and user authentication."
        />
        <ProjectCard
          title="Amazon Homepage Clone"
          main="An Amzon homepage User interface clone using HTMl and CSS."
        />
        <ProjectCard
          title="Portfolio"
          main="A personal portfolio website to showcase projects and skills.Implemented smooth animations and responsive layouts for an engaging experience.
"
        />
        <ProjectCard
          title="Guess My Number"
          main="An user interactive game where user guess the number and checks with the actual number developed using HTML, CSS and Javascript."
        />
      </div>
    </div>
  );
};

export default Projects;
