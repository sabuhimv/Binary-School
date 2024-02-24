import React from 'react'
import Project from '../Project/Project'
import p1 from '../../../assets/images/projects/p1.svg'
import p2 from '../../../assets/images/projects/p2.svg'

const Projects = () => {
  return (
    <div className='my-container flex flex-col mt-7'>
        <div className="projects-title flex justify-between pb-9 max-[800px]:pb-7">
            <h5 className='font-medium text-2xl text-[#3C3C3C]'>Layiheler</h5>
            <a href="#" className='underline font-medium text-lg text-[#3C3C3C]'>Hamisina bax</a>
        </div>

        <div className="projects flex justify-between flex-wrap max-[800px]:justify-center">
            <Project img={p1} title={"“Code of Month 2”"} about={"Front-end developer olaraq inkişaf etmək istəyən gənclər üçün"} link={"Qoşul"}/>
            <Project img={p2} title={"“Web Challenge”"} about={"Web proqramlaşdırma üzrə 30 gün fərqli mövzularda və tapşırıqlarla özünü inkişaf elətdirmək imkanı"} link={"Nəticələr"}/>
            <Project img={p1} title={"“Code of Month 2”"} about={"Front-end developer olaraq inkişaf etmək istəyən gənclər üçün"} link={"Qoşul"}/>
        </div>
    </div>
  )
}

export default Projects