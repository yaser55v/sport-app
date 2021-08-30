import React from "react";
import LogoLight from "../images/logo-light.svg";
import twitter from "../images/twitter-2.svg";
import facebook from "../images/facebook-2.svg";
import instagram from "../images/instagram-2.svg";
const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-start px-4 py-12 bg-brand sm:flex-row sm:justify-around sm:items-center">
        <a href="/" className="order-1 my-4 lg:my-0">
          <img src={LogoLight} alt="" />
        </a>
        <div className="flex -mx-2 order-3 lg:order-2 my-4 lg:my-0">
          <a
            href="/"
            className="mx-2 lg:mx-5 font-bold text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Download
          </a>

          <a
            href="/"
            className="mx-2 lg:mx-5 font-bold text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Support
          </a>

          <a
            href="/"
            className="mx-2 lg:mx-5 font-bold text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Developers
          </a>
          <a
            href="/"
            className="mx-2 lg:mx-5 font-bold text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Privacy
          </a>
        </div>

        <div className="flex -mx-2 order-2 lg:order-3 my-4 lg:my-0">
          <a
            href="/"
            className="mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            aria-label="Twitter"
            title="Twitter"
          >
            <img src={twitter} alt="" />
          </a>

          <a
            href="/"
            className="mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            aria-label="Facebook"
            title="Facebook"
          >
            <img src={facebook} alt="" />
          </a>

          <a
            href="/"
            className="mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            aria-label="Instagram"
            title="Instagram"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
      </footer>
      <a
        className="bg-gray-700 text-white block p-4"
        href="https://www.figma.com/file/MxiIfk5djCxaroatwdhriDvg/Mobile-App-Landing-Page"
        target="_blank"
        rel="noreferrer"
      >
        Figma Source Mobile-App-Landing-Page
      </a>
    </>
  );
};

export default Footer;
