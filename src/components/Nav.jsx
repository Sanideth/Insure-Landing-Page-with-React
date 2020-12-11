import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";

const Nav = () => (
  <nav className="header__nav">
    <div className="container">
      <div className="header__nav-container">
        <Logo />
        <NavList />
      </div>
    </div>
  </nav>
);

export default Nav;
