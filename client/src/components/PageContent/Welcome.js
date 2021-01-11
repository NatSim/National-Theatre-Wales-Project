import React from "react";
import "./Welcome.css";
import NextButton from "../Buttons/MainButton";
import BeeStamp from "../../images/whole-beeimage.png";
import PlaceHolder from "../../images/whole-beeimage.png";
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

  //  Bee transition Effect
  // const fadeOutBee = () => {
  //   if (!welcomeStep === 0 || 2);
  //   return true;
  //   {
  //     return false;
  //   }
  // };

  return (
    <div>
      <section className="title-container">
        <h1>
          {welcomeStep === 0
            ? newTitle()
            : title && welcomeStep === 2
            ? questionChars()
            : title}
        </h1>
        <img className="callum" src={PlaceHolder} alt="Callum" />
        <p>{welcomeStep === 0 ? specialChars() : mainText}</p>
        <NextButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
      </section>

      <figure className="image-container">
        <img
          className="tranisition-image"
          src={BeeStamp}
          alt="Large Bee Stamp"
        />
      </figure>
    </div>
  );
};

export default Welcome;
