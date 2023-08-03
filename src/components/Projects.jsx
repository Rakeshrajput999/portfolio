import React from "react";
import ProjectCard from "./subcomponents/ProjectCard";

const Projects = () => {
  return (
    <div name="Projects" className="tw-bg-slate-900 tw-h-screen tw-w-full">
      <div className="tw-max-w-[1000px] tw-mx-auto  tw-p-4 tw-flex tw-flex-col tw-justify-center  tw-w-full tw-h-full ">
        <h1 className="tw-text-4xl tw-font-bold tw-inline tw-border-b-4 tw-w-20 tw-border-purple-500 tw-text-slate-200 tw-mx-4">
          Projects
        </h1>
        <p className="tw-p-4 tw-text-purple-400">
          This are the projects I've worked with
        </p>
        <div className="tw-w-full tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-text-center tw-py-8">
          <ProjectCard
            demo="https://typingskill.netlify.app"
            code="https://github.com/Rakeshrajput999/typing-skill-test"
            heading="Typing Test app"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
