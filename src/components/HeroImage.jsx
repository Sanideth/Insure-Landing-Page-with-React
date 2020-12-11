import React from "react";
import desktopImg from "../img/image-intro-desktop.jpg";
import mobileImg from "../img/image-intro-mobile.jpg";

const HeroImage = () => (
  <img
    src={desktopImg}
    srcSet={`${mobileImg} 768w, ${desktopImg} 1280w`}
    alt="Intro"
    className="header__img"
  />
);

export default HeroImage;
