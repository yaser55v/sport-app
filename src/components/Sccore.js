import React from "react";

import Group from "../images/cover.svg";
const Sccore = () => {
  return (
    <section>
      <div className="relative flex flex-col sm:py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className=" py-6 mb-4 text-base font-bold tracking-wider text-brand uppercase text-center sm:text-left">
                  GET STARTED
                </p>
              </div>
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-800 text-center sm:text-left">
                Lorem Ipsum is simply
              </h2>
              <div className="text-center sm:text-left">
                <p className="text-base font-normal text-gray-500 tracking-wider pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been
                </p>
                <p className="text-base font-normal text-gray-500 tracking-wider">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center text-base font-bold tracking-wider text-brand pt-14 transition-colors "
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4  lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="sm:object-cover w-full  sm:h-96 lg:h-full"
            src={Group}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Sccore;
