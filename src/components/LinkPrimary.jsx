/* eslint-disable react/prop-types */
import React from "react";

const LinkPrimary = (props) => {
  const { text } = props;
  return (
    <a
      href="https://github.com/Sanideth/Insure-Landing-Page-with-React"
      className="link-primary"
    >
      {text}
    </a>
  );
};

export default LinkPrimary;
