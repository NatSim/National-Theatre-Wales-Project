import React from "react";
import "./Welcome.css";
import NextButton from "../../Buttons/MainButton";
import PlaceHolder from "../../../images/whole-beeimage.png";
import { useHistory } from "react-router";
import SideNav from "../../Nav/SideNav";

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
      <span className="yellow">Go tell the Bees</span>
    </>
  );

  const specialChars = () => (
    <>
      <span>Go Tell the Bees, asks each one of us to perform seven</span>
      <span className="blue"> Simple Acts </span>
      <span> in our daily lives.</span>
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
        <div className="sidenav-container">
          <SideNav />
        </div>
        <h1 className="welcome-title">
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
        <p className="main-text">
          {welcomeStep === 0 ? specialChars() : mainText}
        </p>
        <p>{welcomeStep === 3 ? navigateToHome() : ""}</p>
        <NextButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
      </section>
    </div>
  );
};

export default Welcome;
