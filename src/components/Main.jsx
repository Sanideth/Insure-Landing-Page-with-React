import React from "react";
import HeadingSecondary from "./HeadingSecondary";
import iconSnappyProcess from "../img/icon-snappy-process.svg";
import iconAffordablePrices from "../img/icon-affordable-prices.svg";
import iconPeopleFirst from "../img/icon-people-first.svg";
import CredentialsBox from "./CredentialsBox";
import HeadingTertiary from "./HeadingTertiary";
import LinkPrimary from "./LinkPrimary";

const Main = () => (
  <main className="main">
    <div className="container">
      <div className="main__heading-secondary-container u-mb-m">
        <HeadingSecondary />
      </div>
      <div className="main__content">
        <CredentialsBox
          icon={iconSnappyProcess}
          heading="Snappy Process"
          text="Our application process can be completed in minutes, not hours. Don’t get 
          stuck filling in tedious forms."
          alt="Snappy Process Icon"
        />
        <CredentialsBox
          icon={iconAffordablePrices}
          heading="Affordable Prices"
          text="We don’t want you worrying about high monthly costs. Our prices may be low, 
          but we still offer the best coverage possible."
          alt="Affordable Prices Icon"
        />
        <CredentialsBox
          icon={iconPeopleFirst}
          heading="People First"
          text="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
          sure you’re covered when you need it."
          alt="People First Icon"
        />
      </div>
      <div className="main__heading-tertiary-container">
        <HeadingTertiary />
        <LinkPrimary text="How we work" />
      </div>
    </div>
  </main>
);

export default Main;
