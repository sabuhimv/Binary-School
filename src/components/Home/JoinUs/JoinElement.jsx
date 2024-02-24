import React from "react";

const JoinElement = ({img,title,desc}) => {
  return (
    <div className="join-element flex flex-col items-center text-center w-[250px] p-5">
      <img src={img} alt="" />
      <p className="blue-text font-medium text-[18px] leading-[25px] pt-2 pb-1">
        {title}
      </p>
      <p className="normal-text font-normal text-[14px] leading-[20px]">
        {desc}
      </p>
    </div>
  );
};

export default JoinElement;
