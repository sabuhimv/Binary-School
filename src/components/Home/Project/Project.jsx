import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import './Project.css'

const Project = ({img,title,about,link}) => {
  return (
    <div className='project-container w-[29%] h-[340px] shadow-lg	 ml-2  mr-2 flex flex-col items-center text-center column border-solid border-2 border-gray-200 rounded-md max-[1060px]:w-[40%] max-[1060px]:mb-8 max-[800px]:w-[55%] max-[660px]:w-[58%] max-[550px]:w-[70%]'>
        <div className="project-img">
            <img src={img} alt="" />
        </div>

        <div className="project-body pl-5 pr-5">
            <h5 className="project-name normal-text font-normal text-lg	pt-3 pb-1">{title}</h5>
            <p className='gray-text2 pb-3'>{about}</p>
            <a href="#" className='mb-5'><span className='pr-1.5'>{link}</span> <FaArrowRight/></a>
        </div>
    </div>
  )
}

export default Project