import React from "react";
import "./Welcome.css";
import NextButton from "./NextButton";

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
  console.log(title, mainText, imageUrl, onClickHandler); //check for errors

  //Adding Class for styling
  const str = title;
  const last = str.slice(11, 27);
  const first = str.slice(0, 10);
  const newTitle = () => (
    <>
      Welcome to
      <span className="yellow">Go tell the bees</span>
    </>
  );

  return (
    <div>
      <h1>{welcomeStep === 0 ? newTitle() : title}</h1>
      <p>{mainText}</p>
      <NextButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
      <img className="wholeBee" src={imageUrl} alt="LargeBee" />
    </div>
  );
};

export default Welcome;
