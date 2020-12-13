import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import NavButton from "./NavButton";

const Nav = () => (
  <nav className="header__nav" id="header-nav">
    <div className="container">
      <div className="header__nav-container">
        <Logo />
        <NavList />
        <NavButton />
      </div>
    </div>
  </nav>
);

export default Nav;
