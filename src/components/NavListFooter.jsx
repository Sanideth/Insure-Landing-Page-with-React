/* eslint-disable react/prop-types */
import React from "react";
import HeadingQuinary from "./HeadingQuinary";

const NavListFooter = (props) => {
  const { listItems, heading } = props;
  return (
    <div className="footer__nav-list-container">
      <HeadingQuinary heading={heading} />

      <ul className="footer__nav-list">
        {listItems.map((item) => (
          <li className="footer__nav-list-item" key={item}>
            <a
              href="https://github.com/Sanideth/Insure-Landing-Page-with-React"
              className="footer__nav-list-link"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavListFooter;
