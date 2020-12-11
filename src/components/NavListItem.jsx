/* eslint-disable react/prop-types */
import React from "react";

const NavListItem = (props) => {
  const { text } = props;
  return (
    <li className="header__list-item">
      <a
        href="https://github.com/Sanideth/Insure-Landing-Page-with-React"
        className="header__list-link"
      >
        {text}
      </a>
    </li>
  );
};

export default NavListItem;
