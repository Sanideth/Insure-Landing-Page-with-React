import React from "react";
import Logo from "./Logo";
import iconFacebook from "../img/icon-facebook.svg";
import iconTwitter from "../img/icon-twitter.svg";
import iconPinterest from "../img/icon-pinterest.svg";
import iconInstagram from "../img/icon-instagram.svg";
import IconSecondary from "./IconSecondary";
import NavListFooter from "./NavListFooter";

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__header">
        <Logo />
        <div className="footer__social-icon-container">
          <IconSecondary icon={iconFacebook} alt="Facebook Icon" />
          <IconSecondary icon={iconTwitter} alt="Twitter Icon" />
          <IconSecondary icon={iconPinterest} alt="Pinterest Icont" />
          <IconSecondary icon={iconInstagram} alt="Instagram Icon" />
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
