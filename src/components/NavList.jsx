import React from "react";
import NavListItem from "./NavListItem";

const NavList = () => (
  <ul className="header__list" id="main-nav">
    <NavListItem text="How we work" />
    <NavListItem text="Blog" />
    <NavListItem text="Account" />
    <NavListItem text="View Plans" />
  </ul>
);

export default NavList;
