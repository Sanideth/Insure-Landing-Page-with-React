/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { css } from "@emotion/css";

const IconSecondary = (props) => {
  const { icon, color } = props;
  const [fill, setFill] = useState("hsl(273, 4%, 51%)");

  const setStyle = (newColor) => {
    setFill(newColor);
  };
  const iconSecondary = css`
    width: 2rem;
    height: 2rem;
    fill: ${fill};
    transition: all 0.2s;
  `;

  return (
    <a href="https://github.com/Sanideth" className="icon-link">
      <svg
        className={iconSecondary}
        onMouseEnter={() => setStyle(color)}
        onMouseLeave={() => setStyle("hsl(273, 4%, 51%)")}
      >
        <use href={icon} />
      </svg>
    </a>
  );
};

export default IconSecondary;

// <img src={icon} alt={alt} className="icon-secondary" />;
