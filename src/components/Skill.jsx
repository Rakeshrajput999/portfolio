import React from "react";
import SkilltachImage from "./subcomponents/SkilTechImage";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

const Skill = () => {
  return (
    <div name="Skill" className="tw-bg-slate-900 tw-h-screen tw-w-full">
      <div className="tw-max-w-[1000px] tw-mx-auto  tw-p-4 tw-flex tw-flex-col tw-justify-center  tw-w-full tw-h-full ">
        <h1 className="tw-text-4xl tw-font-bold tw-inline tw-border-b-4 tw-w-20 tw-border-purple-500 tw-text-slate-200 tw-mx-4">
          Skill
        </h1>
        <p className="tw-p-4 tw-text-purple-400">
          {" "}
          This are the technologies I've worked with{" "}
        </p>
        <div className="tw-w-full tw-grid tw-grid-cols-2 sm:tw-grid-cols-4 tw-text-center tw-py-8">
          <SkilltachImage icons={<SiHtml5 />}>
            <SiHtml5 className="tw-text-red-800" />
          </SkilltachImage>
          <SkilltachImage>
            <SiCss3 className="tw-text-blue-700" />
          </SkilltachImage>
          <SkilltachImage>
            <SiJavascript className="tw-text-yellow-500" />
          </SkilltachImage>
          <SkilltachImage>
            <SiReact className="tw-text-blue-500" />
          </SkilltachImage>
          <SkilltachImage>
            <SiVuedotjs className="tw-text-green-700" />
          </SkilltachImage>
          <SkilltachImage>
            <SiIonic className="tw-text-blue-400" />
          </SkilltachImage>
          <SkilltachImage>
            <SiTailwindcss className="tw-text-blue-400" />
          </SkilltachImage>
          <SkilltachImage>
            <SiFigma className="tw-text-orange-500" />
          </SkilltachImage>
        </div>
      </div>
    </div>
  );
};

export default Skill;
