import React from "react";
import s1 from '../../../assets/images/supports/s1.svg'
import s2 from '../../../assets/images/supports/s2.svg'
import s3 from '../../../assets/images/supports/s3.svg'
import s4 from '../../../assets/images/supports/s4.svg'

const Supports = () => {
  return (
    <div className="my-container-fluid bg-[#F6F9FD] flex flex-col text-center">
      <div className="support-title font-normal text-2xl text-[#AAAAAA]">
        Bizimlə birlikdə gənclərimizə dəstək olanlar
      </div>

      <div className="companies flex items-center justify-evenly">
        <div className="company">
            <img src={s1} alt="" />
        </div>
        <div className="company">
            <img src={s2} alt="" />
        </div>
        <div className="company">
            <img src={s3} alt="" />
        </div>
        <div className="company">
            <img src={s4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Supports;
