import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import stat1 from "../images/stat-1.svg";
import stat2 from "../images/stat-2.svg";
import stat3 from "../images/stat-3.svg";
import sportTv from "../images/sport-tv.svg"
import sport from "../images/sport.svg"
import nbc from "../images/nbc.svg"
import designer from "../images/designer.svg"
import dn from "../images/dn.svg"
import sky from "../images/sky.svg"
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Statistics() {
  return (
    <>
      <div className="py-16  lg:py-20">
        <h2 className="text-3xl font-bold  pb-4 leading-tight text-gray-700 text-center">
          What Our Users Say
        </h2>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          width={1800}
          className="mySwiper p-24"
        >
          <SwiperSlide>
            <img src={stat1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={stat2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={stat3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={stat1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={stat2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={stat3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-gray-50">
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="text-3xl font-bold  pb-16 leading-tight text-gray-700 text-center">
            We have been featured in
          </h2>
          <div className="grid gap-8 row-gap-5 sm:row-gap-8 grid-cols-2 lg:grid-cols-6 items-center justify-center">
          <img src={sportTv} alt="" />
          <img src={sport} alt="" />
          <img src={nbc} alt="" />
          <img src={designer} alt="" />
          <img src={dn} alt="" />
          <img src={sky} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
