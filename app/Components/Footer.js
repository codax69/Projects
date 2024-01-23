import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
const Footer = () => {
  return (
    <>
      <div className="flex max-w-5xl mx-auto py-7 items-center">
        <span className="px-5">
          <a href="https://github.com/">
            <FaGithub size={40} />
          </a>
        </span>{" "}
        |{" "}
        <span className="px-5">
          <BsInstagram size={40} />
        </span>{" "}
        |{" "}
        <span className="px-5">
            <a href="http://random-js.vercel.app">
          <IoLogoJavascript size={40} />
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
