import React from "react";
import FrameImg from "../images/Frame-2.svg";
import Apple from "../images/Apple-Store.svg";
import Google from "../images/Google-Play.svg";
const Content = () => {
  return (
    <div className="relative flex flex-col-reverse px-4 pt-16 sm:py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
      <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden  lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <img
          src={FrameImg}
          className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt=""
        />
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto lg:max-w-screen-xl"> 
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="text-3xl font-bold lg:text-left pb-14 leading-tight tracking-tight text-gray-700 text-center">
              Lorem Ipsum is simply dummy
            </h2>
            <p className="text-base leading-8 font-normal  text-center sm:text-left text-gray-500 tracking-widest">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
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
      </div>
    </div>
  );
};

export default Content;
