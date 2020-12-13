import React from "react";

const NavButton = () => {
  const btnClick = () => {
    // const btnNav = document.getElementById("btn-nav");
    const headerNav = document.getElementById("header-nav");
    const mainNav = document.getElementById("main-nav");
    const span1 = document.getElementById("span-1");
    const span2 = document.getElementById("span-2");
    const span3 = document.getElementById("span-3");

    span1.classList.toggle("span1-active");
    span2.classList.toggle("span2-deactive");
    span3.classList.toggle("span3-active");
    mainNav.classList.toggle("toggle-active");
    headerNav.classList.toggle("fixxed");
  };
  return (
    <button
      className="btn nav-btn"
      type="button"
      id="btn-nav"
      onClick={btnClick}
    >
      <span className="btn-span btn-span--1" id="span-1" />
      <span className="btn-span btn-span--2" id="span-2" />
      <span className="btn-span btn-span--3" id="span-3" />
    </button>
  );
};

export default NavButton;
