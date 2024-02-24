import React from "react";
import c1 from "../../../assets/images/comments/c1.svg";
import nail from "../../../assets/images/comments/nail.svg";

const Comment = () => {
  return (
    <div className="comment-container flex flex-col border-2 border-solid border-[#E1E1E1] py-5 px-3">
      <div className="comment-top flex items-center pb-6">
        <div className="cmnt-img min-w-[60px]">
          <img src={c1} alt="" className="w-[100%]" />
        </div>
        <div className="about flex flex-col pl-3 pr-8">
          <h3 className="font-normal text-sm normal-text pb-1">
            Sanan Mammadzada
          </h3>
          <span className="normal-text font-light text-xs">UX/UI Designer</span>
        </div>

        <div className="max-w-[80px] min-w-[40px]">
          <img src={nail} alt="" className="w-[100%] max-[960px]:hidden" />
        </div>
      </div>

      <p className="comment-bottom font-light text-xs normal-text">
        Code of month layihədə iştirak etmişdim və nəticədə tez bir zamanda iş
        ilə təmin olundum!
      </p>
    </div>
  );
};

export default Comment;
