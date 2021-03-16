import React from "react";
import "./Welcome.css";
import NextButton from "../../Buttons/MainButton";
import PlaceHolder from "../../../images/whole-beeimage.png";
import { useHistory } from "react-router";

/**
 Functional component-Welcome message
 
 Appears on Landing page
 **/

const Welcome = ({
  title,
  mainText,
  imageUrl,
  onClickHandler,
  welcomeStep,
}) => {
  console.log(typeof welcomeStep); //check for errors

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

  const history = useHistory();
  //On Button click redirects user to profile page
  const navigateToHome = () => {
    history.push("/home");
  };

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
        <p>{welcomeStep === 3 ? navigateToHome() : ""}</p>
        <NextButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
      </section>
    </div>
  );
};

export default Welcome;
