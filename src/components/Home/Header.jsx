import React from "react";
import "./Header.css";
import { FaRegUserCircle } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import logo from "../../assets/images/header/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import arrowDown from "../../assets/images/header/arrow-down.svg";
import aze from "../../assets/images/header/aze.svg";

const Header = () => {
  const overlayMenuRef = useRef();

  function openOverlayMenu(e) {
    const clicedPlace = e.target;
    if (clicedPlace.classList.contains("bars-icon")) {
      overlayMenuRef.current.classList.add("overlay-active");
    }
  }

  function closeOvelayMenu(e) {
    if (e.target.classList.contains("cross-icon")) {
      overlayMenuRef.current.classList.remove("overlay-active");
    }
  }

  return (
    <>
      <div className="overlay" ref={overlayMenuRef}>
        <RxCross2
          onClick={closeOvelayMenu}
          className="cross-icon absolute top-5 right-5 text-4xl cursor-pointer text-white"
        />

        <div className="nav-links">
          <ul className="flex flex-col items-center justify-center h-[100vh] text-white text-3xl">
            <li>
              <a href="#">Ana səhifə</a>
            </li>
            <li>
              <a href="">Layihələr</a>
            </li>
            <li>
              <a href="">Təlimlər</a>
            </li>
            <li>
              <a href="">Əlaqə</a>
            </li>
          </ul>
        </div>

        <div className="connections text-white">
          <div className="login flex items-center pr-[20px] cursor-pointe absolute top-[20%] left-[10%]">
            <FaRegUserCircle className="text-2xl"/>
            <span className="pl-[5px]">
              <a href="#" className="text-lg">Login</a>
            </span>
          </div>

          <span className="pr-[20px] cursor-pointer text-lg absolute top-[20%] left-[40%]">
            <a href="#">Sign up</a>
          </span>

          <div className="language cursor-pointer flex justify-between text-lg absolute top-[20%] left-[70%]">
            <span>AZ</span>
            <img src={aze} alt="" className="px-2" />
            <img src={arrowDown} alt="" />
          </div>
        </div>
      </div>

      <header
        id="header"
        className="my-container blue-bg text-white font-light"
      >
        <div className="header-top flex justify-end pb-7">
          <div className="flex items-center pr-16 text-base">
            <LuPhone className="text-2xl" />{" "}
            <span className="pl-2">+994 50 785 22 66</span>
          </div>
          <div className="flex items-center text-base">
            <IoLocationOutline className="text-2xl" />
            <span className="pl-2">Azaro Plaza</span>
          </div>
        </div>

        <div className="header-bottom flex justify-between">
          <div className="header-left flex justify-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>

            <ul className="navbar text-lg	 font-medium flex justify-between items-center">
              <li>
                <a className="active" href="#">
                  Ana səhifə
                </a>
              </li>
              <li>
                <a href="">Layihələr</a>
              </li>
              <li>
                <a href="">Təlimlər</a>
              </li>
              <li>
                <a href="">Əlaqə</a>
              </li>
            </ul>
          </div>

          <div className="header-right flex justify-between items-center text-lg font-medium">
            <div className="login flex items-center pr-[20px] cursor-pointer">
              <FaRegUserCircle />
              <span className="pl-[5px]">
                <a href="#">Login</a>
              </span>
            </div>

            <span className="pr-[20px] cursor-pointer">
              <a href="#">Sign up</a>
            </span>

            <div className="language cursor-pointer flex justify-between">
              <span>AZ</span>
              <img src={aze} alt="" className="px-2" />
              <img src={arrowDown} alt="" />
            </div>
          </div>

          <div className="header-hamburger text-2xl cursor-pointer	">
            <GiHamburgerMenu onClick={openOverlayMenu} className="bars-icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
