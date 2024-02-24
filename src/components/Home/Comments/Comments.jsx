import React, { useRef } from "react";
import light from "../../../assets/images/comments/light.svg";
import Comment from "./Comment";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Comments.css";

const Comments = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="my-container">
      <div className="comments-title flex items-center font-medium text-[26px] leading-[32px] normal-text mb-9 max-[768px]:mb-3">
        <h1>Gənclərimiz deyir ki....</h1>
        <img src={light} alt="" />
      </div>

      <div className="comments-swiper">
        <Swiper
          modules={[Navigation,Autoplay]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
          <SwiperSlide>
            <Comment />
          </SwiperSlide>
          <SwiperSlide>
            <Comment />
          </SwiperSlide>

          <div ref={navigationPrevRef} className="swiper-button-prev">
            {"<"}
          </div>
          <div ref={navigationNextRef} className="swiper-button-next">
            {">"}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Comments;
