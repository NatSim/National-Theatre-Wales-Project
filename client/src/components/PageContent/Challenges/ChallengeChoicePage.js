import React, { useState } from "react";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";
import Header from "../../../components/Header/Header";
import SideNav from "../../Nav/SideNav";

//**This page component displays the unique challenge item content 7 total **/

const ChallengeItem = (props) => {
  //Displays clicked well done message
  const [welldone, setWelldone] = useState([]);

  //DisplayWelldone onclick handler
  const onClickHandler = () => {
    // alert("this is working");
    setWelldone("Well done you have completed a Simple Act!");
  };

  return (
    <>
      <div className="title-container">
        <Header />
        <SideNav />

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
                {props.urlFilm} {props.urlBook} {props.urlArtist}
              </span>
              <div className="flex-child">
                <h3 className="resources-subheading">
                  {props.resourcesSubheading}
                </h3>
                <div className="flex-child">
                  <h3 className="resources-subheading">
                    {props.charityHeading}
                  </h3>
                  <span>{props.urlCharity}</span>
                </div>
                <ul>
                  <li>{props.urlResources} (Under 16s)</li>
                  <li>{props.urlResources2} (Under 16s)</li>
                  <li>
                    {props.urlResources3}{" "}
                    {props.urlResources3 ? "(Under 16s)" : ""}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-child" id="border-control">
              <h3 className="quote-heading">{props.quoteHeading}</h3>
              <p>{props.quote}</p>
            </div>
          </section>
          <CompleteChallengeButton onClickHandler={onClickHandler} />

          <div className="welldone-message">
            <p>{welldone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeItem;
