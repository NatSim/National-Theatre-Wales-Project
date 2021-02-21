import React from "react";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";

//whichChallengeIsClicked function to display unique data
//if else statement -teniry // map function goes through each simple text displays?

const ChallengeItem = ({
  act,
  image,
  text1,
  text2,
  text2Subheading,
  onClickHandler,
  discoverHeading,
  discoverItems,
  quoteHeading,
  quote,
  challengeChoice,
}) => {
  return (
    <>
      <div className="challenge-page">
        <section className="prompt-act-container">
          <div className="prompt-text-container">
            <h1 className="prompt-text">Your Simple Act is to...</h1>
          </div>

          <div className="act-control-container">
            <h2 className="act-control-child">{act}</h2>
          </div>
          <div className="image-container">
            <img className="image" src={image} alt={"simple act challenge"} />
          </div>

          <div className="intro-text">
            <p className="text-control"> {text1}</p>
          </div>
        </section>
      </div>
      <div className="challenge-page-background2">
        <section className="article-image-container">
          <div className="flex-parent">
            <div className="flex-child">
              <h2 className="text2-subheading">{text2Subheading}</h2>
              <p className="text-control"> {text2}</p>
            </div>
            <div className="flex-child">
              <img className="place-holder" src={image} alt={"placeholder"} />
            </div>
          </div>
          <div className="flex-child">
            <h2 className="discover-subheading">{discoverHeading}</h2>
            <p className="discover-items-container"> {discoverItems}</p>
            <span>{discoverItems.artistLink}</span>
          </div>
          <div className="flex-child">
            <h2 className="quote-heading">{quoteHeading}</h2>
            <p>{quote}</p>
          </div>
        </section>
        <CompleteChallengeButton onClickHandler={onClickHandler} />
      </div>
    </>
  );
};

export default ChallengeItem;
