import React from "react";
import "./Welcome.css";
import SmallButton from "./NextButton";

/**
 *Functional component-Welcome message
 *
 *Appears only once for each first time user visit
 */

const Welcome = ({
  title,
  mainText,
  imageUrl,
  onClickHandler,
  welcomeStep,
}) => {
  console.log(title, mainText, onClickHandler); //check for errors

  return (
    <div>
      <h1>{title}</h1>
      <p>{mainText}</p>
      <SmallButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
      <img className="wholeBee" src={imageUrl} alt="LargeBee" />
    </div>
  );
};

export default Welcome;
