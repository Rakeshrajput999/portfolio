import React from "react";
import projectimg from "../assets/web-2496193_640.jpg";
import WorkCard from "./subcomponents/WorkCard";

const Work = () => {
  return (
    <div name="Work" className="tw-w-full tw-h-screen tw-bg-slate-600 tw-px-4">
      <div className="tw-max-w-[1000px] tw-mx-auto  tw-p-4 tw-flex tw-flex-col tw-justify-center  tw-w-full tw-h-full ">
        <h1 className="tw-text-4xl tw-text-gray-200 tw-border-b-4 tw-w-48 tw-border-purple-500 ">
          Experience
        </h1>
        <p className="tw-py-4">I worked with...</p>

        {/* work card */}
        <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-3">
          <WorkCard img='/cricstox.png'company='Cricstox' role='Developer' />
          <WorkCard img='/hotwax.png' company='Hotwax system' role='Intern' />
          <WorkCard img='/devsnest.jpeg' company='Devsnest' role='Trainee'/>
        </div>
      </div>
    </div>
  );
};

export default Work;
