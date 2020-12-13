import React from "react";
import Logo from "./Logo";
import sprite from "../img/icons/symbol-defs.svg";
import IconSecondary from "./IconSecondary";
import NavListFooter from "./NavListFooter";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__header">
        <Logo />
        <div className="footer__social-icon-container">
          <IconSecondary
            icon={`${sprite}#icon-facebook2`}
            color="#4267b2"
            ariaLabel="Facebook Link"
          />
          <IconSecondary
            icon={`${sprite}#icon-twitter`}
            color="#1da1f2"
            ariaLabel="Twitter Link"
          />
          <IconSecondary
            icon={`${sprite}#icon-pinterest`}
            color="#e60023"
            ariaLabel="Pinterest Link"
          />
          <IconSecondary
            icon={`${sprite}#icon-instagram`}
            color="#c13584"
            ariaLabel="Instagram Link"
          />
        </div>
      </div>
      <nav className="footer__nav">
        <NavListFooter
          heading="Our company"
          listItems={["How we work", "Why Insure?", "View plans", "Reviews"]}
        />
        <NavListFooter
          heading="Help me"
          listItems={["FAQ", "Terms of use", "Privacy policy", "Cookies"]}
        />
        <NavListFooter
          heading="Contact"
          listItems={["Sales", "Support", "Live chat"]}
        />
        <NavListFooter
          heading="Others"
          listItems={["Careers", "Press", "Licenses"]}
        />
      </nav>
    </div>
  </div>
);

export default Footer;
