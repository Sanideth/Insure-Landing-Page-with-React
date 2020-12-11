/* eslint-disable react/prop-types */
import React from "react";

const IconMain = (props) => {
  const { icon, alt } = props;
  return <img src={icon} alt={alt} className="icon-main u-mb-sm" />;
};

export default IconMain;
