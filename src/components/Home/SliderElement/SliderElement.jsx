import React from "react";
import "../SliderElement/SliderElement.css";
import s1 from "../../../assets/images/slider/s1.svg";
import s2 from "../../../assets/images/slider/background.svg";

const SliderElement = ({title,describtion,image}) => {
  return (
    <div className="slider-element flex justify-between items-center my-container text-white slide-element">
      <div className="slider-title">
        <p className="font-medium text-[30px] leading-9 pb-3">
          {title}
        </p>
        <span className="font-normal leading-6 greey-text">
          {describtion}
        </span>

        <div className="btns pt-4">
          <a href="" className="normal-btn inline-block mr-2">
            Ətraflı
          </a>
          <a href="" className="green-btn">
            Qeydiyyat
          </a>
        </div>
      </div>
      <div className="slider-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SliderElement;
