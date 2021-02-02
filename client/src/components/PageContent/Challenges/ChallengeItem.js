import React from "react";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";

//whichChallengeIsClicked function to display unique data
//if else statement -teniry // map function goes through each simple text displays?

const ChallengeItem = ({ direction, image, text, challengeChoice }) => {
  return (
    <div className="challenge-page">
      <h1 className="prompt-text"> Your Simple Act is to...</h1>
      <div className="image-container">
        <img className="image" src={image} alt={"simple act challenge"} />
        <p> {text}</p>
      </div>
      <CompleteChallengeButton />
    </div>
  );
};

export default ChallengeItem;
