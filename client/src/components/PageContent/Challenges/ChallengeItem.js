import React from "react";
import { direction, resourcesSubheading } from "../../../Models/simpleText";
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
  urlFilm,
  urlBook,
  urlArtist,
  urlResources,
  urlResources2,
  quoteHeading,
  quote,
  challengeChoice,
}) => {
  return (
    <>
      <div className="challenge-page">
        <section className="prompt-act-container">
          <div className="prompt-text-container">
            <h1 className="prompt-text">{direction}</h1>
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
              <h3 className="text2-subheading">{text2Subheading}</h3>
              <p className="text-control"> {text2}</p>
            </div>
            <div className="flex-child">
              <img className="place-holder" src={image} alt={"placeholder"} />
            </div>
          </div>
          <div className="flex-child">
            <h3 className="discover-subheading">{discoverHeading}</h3>
            <span>
              {urlFilm}, {urlBook}, {urlArtist}
            </span>
            <div className="flex-child">
              <h3 className="resources-subheading">{resourcesSubheading}</h3>
              <ul>
                <li>{urlResources}</li>
                <li>{urlResources2}</li>
              </ul>
            </div>
          </div>
          <div className="flex-child">
            <h3 className="quote-heading">{quoteHeading}</h3>
            <p>{quote}</p>
          </div>
        </section>
        <CompleteChallengeButton onClickHandler={onClickHandler} />
      </div>
    </>
  );
};

export default ChallengeItem;
