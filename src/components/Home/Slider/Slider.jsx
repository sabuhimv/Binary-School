import React from "react";
import "../Slider/Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "../../../assets/images/slider/s1.svg";
import s2 from "../../../assets/images/slider/s2.svg";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderElement from "../SliderElement/SliderElement";

const Slider = () => {
  return (
    <div className="blue-bg pb-6">
      <Swiper
        style={{
          "--swiper-pagination-color": "#C5FF1F",
          "--swiper-pagination-bullet-width": "50px",
          "--swiper-pagination-bullet-height": "3px",
          "--swiper-pagination-bullet-border-radius": "0px",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-horizontal-gap": "0px",
        }}
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <SliderElement
            title={"Müxtəlif layihələr, uğurlu tələbələr!"}
            describtion={
              "IT yolunda uğurlu olmağınız üçün sizə dəstək olub imkanlar yaradırıq."
            }
            image={s1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderElement
            title={"“IT ixtisası” - Təməl səviyyə proqramı."}
            describtion={
              "Bu görüşdə bütün suallarınıza cavab tapacaq və bu proqramın sizin üçün faydasını öyrənəcəksiniz."
            }
            image={s2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderElement
            title={"DevOps saatı"}
            describtion={
              "Sizi DevOps dünyası ilə tanış edəcək maraqlı təlim üçün bizə qoşulun."
            }
            image={s2}
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
