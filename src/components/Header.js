import React from "react";
import Group from "../images/Group-10.svg";
import LOGO from "../images/LOGO.svg";
import Apple from "../images/Apple-Store.svg";
import Google from "../images/Google-Play.svg";

const Header = () => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <header className="bg-hero">
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-red-700">
                    IMPORTANT NOTE!
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-red-500 text-lg leading-relaxed">
                    This site is only for eductional and advertising purposes
                    and has nothing to do with{" "}
                    <strong className="underline">REALITY OR COMMERCIAL</strong>{" "}
                    purposes.
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="pb-24">
          <img className="h-10 m-auto sm:m-0" src={LOGO} alt="Sports logo" />
        </div>
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-xl">
            <div className="max-w-xl mb-6">
              <h2 className="text-3xl font-bold tracking-wide leading-10 text-gray-800 text-center sm:text-left sm:text-4xl sm:leading-normal max-w-xl mb-6">
              Lorem Ipsum is simply dummy text of the printing and 
              </h2>
              <p className="text-gray-700 text-base font-normal text-center sm:text-left md:text-lg max-w-md tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              </p>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-7 justify-evenly sm:justify-start">
              <a
                href="/"
                className="w-32 transition duration-300 hover:shadow-lg"
              >
                <img
                  src={Apple}
                  className="object-cover object-top w-full h-auto mx-auto"
                  alt=""
                />
              </a>
              <a
                href="/"
                className="w-32 transition duration-300 hover:shadow-lg"
              >
                <img
                  src={Google}
                  className="object-cover object-top w-full h-auto mx-auto"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2 ">
            <div className="w-full hidden md:block">
              <img className="object-cover" src={Group} alt="" />
            </div>
          </div>
        </div>
        <span
          

          aria-label="Scroll down"
          className="flex animate-bounce items-center justify-center w-10 h-10 bg-brand mx-auto text-white hover:bg-opacity-75 duration-300 transform border border-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </span>
      </div>
    </header>
  );
};

export default Header;
