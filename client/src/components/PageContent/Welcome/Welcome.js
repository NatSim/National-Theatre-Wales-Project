import React, { useEffect } from "react";
import "./Welcome.css";
import NextButton from "../../Buttons/MainButton";
import PlaceHolder from "../../../images/logos/MainBeeLogo/GTTB_Logo.jpg";
import { useHistory } from "react-router";
import SideNav from "../../Nav/SideNav";

/**
 WELCOME MESSAGE
 Appears on Landing page
 **/

const Welcome = ({
  title,
  mainText,
  imageUrl,
  onClickHandler,
  welcomeStep,
}) => {
  const history = useHistory();
  //On Button click redirects user to home page

  const navigateToHome = () => {
    history.push("/home");
  };

  useEffect(() => {
    if (welcomeStep === 3) {
      navigateToHome();
    }
  });

  const newTitle = () => (
    <>
      <span className="white">Welcome to</span>
      <br />
      <span className="yellow">Go tell the Bees</span>
    </>
  );

  const specialChars = () => (
    <>
      <span className="white">
        Go Tell the Bees, asks each one of us to perform seven
      </span>
      <span className="blue"> Simple Acts </span>
      <span className="white"> in our daily lives.</span>
    </>
  );

  const questionChars = () => (
    <>
      <span className="yellow">So what will you tell the bees?</span>
    </>
  );

  return (
    <>
      <section className="title-container">
        <nav className="sidenav-container">
          <SideNav />
        </nav>
        <section className="text-image-control">
          <div>
            <h1 className="welcome-title">
              {welcomeStep === 0
                ? newTitle()
                : title && welcomeStep === 2
                ? questionChars()
                : title}
            </h1>

            <p className="main-text">
              {welcomeStep === 0 ? specialChars() : mainText}
            </p>
          </div>
          <div>
            <img
              className={`bee-default ${
                welcomeStep === 1 ? "transition-image" : ""
              }`}
              src={PlaceHolder}
              alt="bee"
            />
          </div>
        </section>
        <NextButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
        {/* <p>{welcomeStep === 3 ? navigateToHome() : ""}</p> */}
      </section>
    </>
  );
};

export default Welcome;
