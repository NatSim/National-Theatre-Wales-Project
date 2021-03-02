import React, { useState } from "react";
// import simpleText, {
//   direction,
//   resourcesSubheading,
//   charityHeading,
// } from "../../../Models/simpleText";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";

//**This page displays the unique challenge item content 7 total **/
/**Props entered here to return below, imports above for generic content **/

const ChallengeItem = (props) => {
  //Display clicked well done message
  const [welldone, setWelldone] = useState([]);

  // console.log(setWelldone);

  //DisplayWelldone onclick handler
  const displayWelldoneHandler = () => {
    // alert("this is working");
    setWelldone("Well done you have completed a Simple Act!");
    console.log("completed button was clicked!");
    console.log("Well done message displayed");
    sendItemsToLocal();
  };

  const sendItemsToLocal = () => {
    console.log(props);

    // let challengeChoice = ChallengeItem.challengeChoice;

    return localStorage.setItem("challenge", JSON.stringify(props), [props]);
  };
  // sendItemsToLocal();
  return (
    <>
      <div className="challenge-page">
        <section className="prompt-act-container">
          <div className="prompt-text-container">
            <h1 className="prompt-text">{props.direction}</h1>
          </div>
          <div className="act-control-container">
            <h2 className="act-control-child">{props.act}</h2>
          </div>
          <div className="image-container">
            <img
              className="image"
              src={props.image}
              alt={"simple act challenge"}
            />
          </div>

          <div className="intro-text">
            <p className="text-control2"> {props.text1}</p>
          </div>
        </section>
      </div>
      <div className="challenge-page-background2">
        <section className="article-image-container">
          <div className="flex-parent">
            <div className="flex-child">
              <h3 className="text2-subheading">{props.text2Subheading}</h3>
              <p className="text-control"> {props.text2}</p>
            </div>
            <div className="flex-child">
              <img
                className="place-holder"
                src={props.image}
                alt={"placeholder"}
              />
            </div>
          </div>
          <div className="flex-child">
            <h3 className="discover-subheading">{props.discoverHeading}</h3>
            <span>
              {props.urlFilm}, {props.urlBook}, {props.urlArtist}
            </span>
            <div className="flex-child">
              <h3 className="resources-subheading">
                {props.resourcesSubheading}
              </h3>
              <ul>
                <li>{props.urlResources}</li>
                <li>{props.urlResources2}</li>
                <li>{props.urlResources3}</li>
              </ul>
            </div>

            <div className="flex-child">
              <h3 className="resources-subheading">{props.charityHeading}</h3>
              <span>{props.urlCharity}</span>
            </div>
          </div>
          <div className="flex-child" id="border-control">
            <h3 className="quote-heading">{props.quoteHeading}</h3>
            <p>{props.quote}</p>
          </div>
        </section>
        <CompleteChallengeButton onClickHandler={displayWelldoneHandler} />

        <div className="welldone-message">
          <p>{welldone}</p>
        </div>
      </div>
    </>
  );
};

console.log(ChallengeItem);
export default ChallengeItem;
