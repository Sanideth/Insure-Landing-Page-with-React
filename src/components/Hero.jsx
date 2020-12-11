import React from "react";
import HeadingPrimary from "./HeadingPrimary";
import TextPrimary from "./TextPrimary";
import LinkPrimary from "./LinkPrimary";
import HeroImage from "./HeroImage";

const Hero = () => (
  <div className="header__hero">
    <div className="container">
      <div className="header__container">
        <div className="header__text-container">
          <HeadingPrimary />
          <TextPrimary />
          <LinkPrimary text="View plans" />
        </div>
        <div className="header__img-container">
          <HeroImage />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
