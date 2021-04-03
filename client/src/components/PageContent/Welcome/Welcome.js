import React, { useEffect } from "react";
import "./Welcome.css";
import NextButton from "../../Buttons/MainButton";
import { useHistory } from "react-router";
import SideNav from "../../Nav/SideNav";

/**
 WELCOME MESSAGE
 Appears on Landing page
 **/

const Welcome = ({ title, mainText, onClickHandler, welcomeStep }) => {
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
  /**Step 1 */
  const newTitle = () => (
    <>
      <span className="">Welcome to</span>
      <br />
      <span className="yellow">Go tell the Bees</span>
    </>
  );

  const specialChars = () => (
    <>
      <div className="special-chars-control">
        <span className="">
          <b>Go Tell the Bees, </b>
          <br />
          <b>asks each one of us to perform</b>
          <br />
          <b>seven</b>
        </span>
        <span className="blue">
          <b> Simple Acts</b>
        </span>
        <br />
        <span className="">
          <b> in our daily lives.</b>
        </span>
      </div>
    </>
  );

  const questionChars = () => (
    <>
      <span className="yellow">So what will you tell the bees?</span>
    </>
  );

  console.log(welcomeStep);
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

            <h2 className={"main-text"}>
              {welcomeStep === 0 ? specialChars() : mainText}
            </h2>
          </div>
        </section>
        <div
          className={
            welcomeStep === 0
              ? "welcome-next-button-control0"
              : "welcome-next-button-control1" && !mainText
              ? "welcome-next-button-control1"
              : "welcome-next-button-control2"
          }
        >
          <NextButton
            onClickHandler={onClickHandler}
            welcomeStep={welcomeStep}
          />
        </div>
      </section>
    </>
  );
};

export default Welcome;
