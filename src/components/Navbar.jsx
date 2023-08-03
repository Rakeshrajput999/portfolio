import React, { useState } from "react";
import { Link } from "react-scroll";

import { GrLinkedinOption } from "react-icons/gr";
import { RiGithubLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CgFacebook, CgTwitter } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navToggle = () => setNav(!nav);

  return (
    <div
      className={`tw-fixed tw-top-0 tw-bg-gradient-to-tr tw-from-slate-600 tw-w-full  tw-flex tw-items-center tw-text-emerald-200 tw-justify-between tw-z-10`}
    >
      <div>
        <img
          src="/image-from-rawpixel-id-2762169-png.png"
          alt="logo"
          srcset=""
          className="tw-h-7 tw-px-1 red tw-contrast-200"
        />
      </div>
      <div>
        <ul className="tw-hidden md:tw-flex  md:tw-gap-8 tw-text-xl tw-py-4">
          <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
            <Link to="Home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
            <Link to="About" smooth={true} duration={1000}>
              About
            </Link>
          </li>
                    <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
            <Link to="Projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
            <Link to="Work" smooth={true} duration={1000}>
              Work
            </Link>
          </li>
          <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
            <Link to="Skill" smooth={true} duration={1000}>
              Skill
            </Link>
          </li>
          <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
            <Link to="Contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {/* mobile hamberg */}
      <div onClick={navToggle} className="md:tw-hidden gap tw-m-7 tw-z-10">
        {!nav ? <FaBars /> : <ImCross />}
      </div>
      {/* social media icon */}
      <div className=" md:tw-flex tw-hidden tw-gap-2 tw-mx-7 tw-text-xl">
        <a
          target="blank"
          href="https://www.linkedin.com/in/rakesh-rajput-771a4b16b/"
          className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
        >
          <GrLinkedinOption />
        </a>
        <a
          target="blank"
          className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
          href="https://github.com/Rakeshrajput999"
        >
          <RiGithubLine />
        </a>
        <a
          target="blank"
          className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
          href="https://www.facebook.com/profile.php?id=100004939609287"
        >
          <CgFacebook />
        </a>
        <a
          target="blank"
          className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
          href="https://twitter.com/Rak3shRajput"
        >
          <CgTwitter />
        </a>
        <a
          target="blank"
          className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
          href="mailto:trsrajput1@gmail.com"
        >
          <SiGmail />
        </a>
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "tw-hidden"
            : "tw-absolute tw-top-0 tw-left-0 tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full tw-h-screen tw-gap-4 tw-bg-gradient-to-bl tw-from-slate-900 tw-to-slate-600 md:tw-hidden"
        }
      >
        <li className="tw-py-2 tw-text-2xl ">
          <Link
            to="Home"
            smooth={true}
            duration={500}
            onClick={navToggle}
            className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
          >
            Home
          </Link>
        </li>
        <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
          <Link
            className="tw-py-2 tw-text-2xl"
            to="About"
            smooth={true}
            duration={500}
            onClick={navToggle}
          >
            About
          </Link>
        </li>
        <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
          <Link
            className="tw-py-2 tw-text-2xl"
            to="Work"
            smooth={true}
            duration={500}
            onClick={navToggle}
          >
            Work
          </Link>
        </li>
        <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
          <Link
            className="tw-py-2 tw-text-2xl"
            to="Skill"
            smooth={true}
            duration={500}
            onClick={navToggle}
          >
            Skill
          </Link>
        </li>
        <li className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100">
          <Link
            className="tw-py-2 tw-text-2xl"
            to="Contact"
            smooth={true}
            duration={500}
            onClick={navToggle}
          >
            Contact
          </Link>
        </li>

        <li className="tw-py-6 tw-text-4xl ">
          <div className=" tw-flex tw-justify-between tw-w-full tw-relative tw-bottom-0 tw-gap-7 gap">
            <a
              target="blank"
              href="https://www.linkedin.com/in/rakesh-rajput-771a4b16b/"
              className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
            >
              <GrLinkedinOption />
            </a>
            <a
              target="blank"
              className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
              href="https://github.com/Rakeshrajput999"
            >
              <RiGithubLine />
            </a>
            <a
              target="blank"
              className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
              href="https://www.facebook.com/profile.php?id=100004939609287"
            >
              <CgFacebook />
            </a>
            <a
              target="blank"
              className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
              href="https://twitter.com/Rak3shRajput"
            >
              <CgTwitter />
            </a>
            <a
              target="blank"
              className="tw-opacity-80 hover:tw-opacity-100 tw-duration-100"
              href="mailto:trsrajput1@gmail.com"
            >
              <SiGmail />
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
