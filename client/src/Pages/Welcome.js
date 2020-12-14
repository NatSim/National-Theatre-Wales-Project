import React from "react";
import "./Welcome.css";
import SmallButton from "../Components/NextButton";

/**
 *Functional component-Welcome message
 *
 *Appears only once for each first time user visit
 */

const Welcome = ({ title, mainText, onClickHandler, welcomeStep }) => {
  console.log(title, mainText, onClickHandler);
  return (
    <div>
      <h1>{title}</h1>

      <p>{mainText}</p>
      <SmallButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
    </div>
  );
};

export default Welcome;
