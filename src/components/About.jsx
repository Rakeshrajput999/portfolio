import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="tw-w-full tw-h-screen tw-bg-slate-800 tw-text-gray-300"
    >
      <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-h-full">
        <div className="tw-max-w-[1000px] tw-w-full tw-px-4 tw-grid tw-grid-cols-2 tw-gap-4">
          <div className="sm:tw-text-right tw-pb-8 tw-pl-4 ">
            <p className="tw-text-4xl tw-font-bold tw-inline tw-border-b-4 tw-border-purple-600 ">
              About
            </p>
          </div>
        </div>
        <div className="tw-max-w-[1000px] tw-w-full tw-px-4 tw-grid tw-grid-cols-2 tw-gap-4">
          <div className=" sm:tw-text-right tw-text-4xl tw-font-bold">
            <p>Hi, I am Rakesh, Nice to meet you, please take a look around </p>
          </div>
          <div>
            <p>
              I am a passionate about building excellent design that impress
              users. I am specialized in designing web, mobile, PWA application
              for client ranging from individuals and small-business all the way
              large enterprise corporations . what would you do if you had a app
              designer available at your fingertps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
