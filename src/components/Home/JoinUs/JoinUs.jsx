import React from 'react'
import arrow from '../../../assets/images/join/arrow.svg'
import j1 from '../../../assets/images/join/j1.svg'
import j2 from '../../../assets/images/join/j2.svg'
import j3 from '../../../assets/images/join/j3.svg'
import j4 from '../../../assets/images/join/j4.svg'
import JoinElement from './JoinElement'
import './JoinUs.css'

const JoinUs = () => {
  return (
    <div className='my-container mt-8 flex justify-between join-container'>
        <div className="join-left flex flex-col">
            <p className='normal-text font-medium text-[26px] leading-[32px] mb-2 md:text-[22px]'>Bizi seçəndə yolunuz...</p>
            <div className="joint-desc flex">
                <span color='#8B8B8B' className='text-[16px] leading-[22px] font-light pr-5 mb-9 md:text-[14px]'>Müəyyən mərhələrdən ibarət olan yolunuz sizi hədəfinizə daha yaxın edəcək!</span>
                <img src={arrow} alt="" />
            </div>

            <div className='btns'>
                <a href="#" className='transparent-blue mr-2'>Etrafli</a>
                <a href="#" className='blue-btn'>Bize Qosul</a>
            </div>
        </div>

        <div className="join-right flex flex-wrap justify-end">
            <JoinElement img={j1} title={"Seçim"} desc={"Sənə maraqlı və uyğun olan layihəni seçirsən"}/>
            <JoinElement img={j2} title={"Qoşulma"} desc={"Qoşulduqda layihə barədə ətraflı məlumat əldə edirsən"}/>
            <JoinElement img={j3} title={"İştirak"} desc={"Mentorlarımızın dəstəyi ilə bilikləri artır və faydalı praktiki məsələlər həll et"}/>
            <JoinElement img={j4} title={"Nəticə"} desc={"Əldə etdiyin biliklər səni fərqləndirib karyera quruculuğunda kömək edəcək"}/>
        </div>
    </div>
  )
}

export default JoinUs