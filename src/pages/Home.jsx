import React from "react";
import Slider from "../components/Home/Slider/Slider";
import JoinUs from "../components/Home/JoinUs/JoinUs";
import Comments from "../components/Home/Comments/Comments";
import Supports from "../components/Home/Supports/Supports";
import Projects from "../components/Home/Projects/Projects";

const Home = () => {
  return (
    <>
      <Slider />
      <Projects/>
      <JoinUs/>
      <Comments/>
      <Supports/>
    </>
  );
};

export default Home;
