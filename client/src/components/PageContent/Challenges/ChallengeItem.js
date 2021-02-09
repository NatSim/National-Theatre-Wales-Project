import React from "react";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";

//whichChallengeIsClicked function to display unique data
//if else statement -teniry // map function goes through each simple text displays?

const ChallengeItem = ({ image, text1, text2, challengeChoice }) => {
  return (
    <div className="challenge-page">
      <h1 className="prompt-text"> Your Simple Act is to...</h1>
      <div className="image-container">
        <img className="image" src={image} alt={"simple act challenge"} />
      </div>
      <div className="intro-text">
        <p className="text-control"> {text1}</p>
      </div>

      <section className="article-image-container">
        <div className="flex-parent">
          <div className="flex-child">
            <p className="text-control"> {text2}</p>
          </div>
          <div className="flex-child">
            <img className="place-holder" src={image} alt={"placeholder"} />
          </div>
        </div>
      </section>

      <CompleteChallengeButton />
    </div>
  );
};

export default ChallengeItem;
