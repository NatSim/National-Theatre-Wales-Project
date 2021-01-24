import React from "react";
import "./Welcome.css";
import NextButton from "../../Buttons/MainButton";
import PlaceHolder from "../../../images/whole-beeimage.png";
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

  const newTitle = () => (
    <>
      Welcome to
      <br />
      <span className="yellow">Go tell the bees</span>
    </>
  );

  const specialChars = () => (
    <>
      Go Tell the Bees, asks each one of us to perform seven
      <span className="blue"> Simple Acts </span> in our daily lives.
    </>
  );

  const questionChars = () => (
    <>
      <span className="yellow">So what will you tell the bees?</span>
    </>
  );

  return (
    <div>
      {console.log(welcomeStep)}
      <section className="title-container">
        <h1>
          {welcomeStep === 0
            ? newTitle()
            : title && welcomeStep === 2
            ? questionChars()
            : title}
        </h1>
        <img
          className={`bee-default ${
            welcomeStep === 1 ? "transition-image" : ""
          }`}
          src={PlaceHolder}
          alt="bee"
        />
        <p>{welcomeStep === 0 ? specialChars() : mainText}</p>
        <NextButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
      </section>
    </div>
  );
};

export default Welcome;
