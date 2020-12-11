/* eslint-disable react/prop-types */
import React from "react";
import IconMain from "./IconMain";
import HeadingQuaternary from "./HeadingQuaternary";
import TextSecondary from "./TextSecondary";

const CredentialsBox = (props) => {
  const { icon, alt, heading, text } = props;
  return (
    <div className="main__credentials-box">
      <IconMain icon={icon} alt={alt} />
      <HeadingQuaternary heading={heading} />
      <TextSecondary text={text} />
    </div>
  );
};

export default CredentialsBox;
