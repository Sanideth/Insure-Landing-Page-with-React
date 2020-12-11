/* eslint-disable react/prop-types */
import React from "react";

const IconSecondary = (props) => {
  const { icon, alt } = props;
  return <img src={icon} alt={alt} className="icon-secondary" />;
};

export default IconSecondary;
