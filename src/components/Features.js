import React from "react";

import { featuresArray } from "../featuresArray";
const Features = () => {
  return (
    <section
      className="bg-featuredBg sm:bg-featured sm:bg-no-repeat sm:bg-center sm:bg-cover "
      
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-bold  pb-14 leading-tight tracking-tight text-gray-700 sm:text-white text-center sm:text-left">
        Lorem Ipsum is simply dummy text of the 
        </h2>
        <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuresArray.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex items-center justify-center mb-4 sm:w-10 sm:h-10">
                  {item.icon}
                </div>
                <p className="mb-3 text-base text-gray-700 sm:text-white text-center sm:text-left">
                 {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
