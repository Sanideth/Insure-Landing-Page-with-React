import React from "react";
import desktopImg from "../img/image-intro-desktop.jpg";
import mobileImg from "../img/image-intro-mobile.jpg";

const HeroImage = () => (
  <img
    src={desktopImg}
    srcSet={`${desktopImg} 1280w, ${mobileImg} 768w`}
    sizes="100vw"
    alt="Intro"
    className="header__img"
  />
);

export default HeroImage;
