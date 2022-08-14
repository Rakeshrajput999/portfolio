import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { RiGithubLine } from "react-icons/ri";
import { CgFacebook, CgTwitter } from "react-icons/cg";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="tw-w-full tw-h-screen tw-bg-slate-800 tw-px-4"
    >
      <form
        className="tw-max-w-[600px] tw-mx-auto  tw-p-4 tw-flex tw-flex-col tw-justify-center  tw-w-full tw-h-full "
        action="https://getform.io/f/9c3d4f78-01ef-42e6-84cf-6ba8f90a4610"
        method="POST"
      >
        <div>
          <h1 className=" tw-font-bold tw-text-4xl tw-text-gray-200 tw-border-b-4 tw-inline tw-border-purple-500 tw-w-32">
            Contact
          </h1>
          <h1 className="tw-text-gray-300 tw-my-2">
            Submit the form below or shoot me on social sites:
          </h1>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="tw-my-2 tw-px-2 tw-w-full"
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            className="tw-my-2 tw-px-2 tw-w-full"
          />
          <input
            type="text"
            placeholder="mobile nu"
            name="mobile"
            className="tw-my-2 tw-px-2 tw-w-full"
          />
          <textarea
            name="msg"
            id="msg"
            cols="23"
            className="tw-px-3 tw-my-2 tw-w-full"
            rows="5"
            placeholder="message"
          ></textarea>
          <input
            className="tw-block tw-border-2 tw-px-2 tw-mt-4 tw-text-emerald-100 hover:tw-bg-slate-400 tw-border-slate-500 tw-duration-500"
            type="submit"
            value="Send"
          />
        </div>
        <h1 className="tw-my-4 tw-text-white">
          let's have a discussion on tea....
        </h1>
        <div className=" tw-flex tw-gap-7 tw-w-full  tw-bottom-0 tw-text-2xl tw-text-emerald-300">
          <a href="https://www.linkedin.com/in/rakesh-rajput-771a4b16b/">
            <GrLinkedinOption />
          </a>
          <a href="https://github.com/Rakeshrajput999">
            <RiGithubLine />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100004939609287">
            <CgFacebook />
          </a>
          <a href="https://twitter.com/Rak3shRajput">
            <CgTwitter />
          </a>
          <a href="mailto:trsrajput1@gmail.com">
            <SiGmail />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
