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
      {/* Challenge top background START HERE */}
      <div className="challenge-page">
        <Header />
        <SideNav />
        <section className="prompt-act-container">
          <div className="prompt-text-container">
            <h1 className="prompt-text">{props.direction}</h1>
            <h2 className="act-control-child">{props.act}</h2>
          </div>

          <div className="intro-text">
            <div className="image-container">
              <img
                className="image"
                src={props.image1}
                alt={"simple act challenge"}
              />
            </div>
            <p className="text-control2"> {props.text1}</p>
          </div>
        </section>
      </div>
      {/* Challenge top background END HERE */}
      {/* Challenge section START HERE */}
      <div className="challenge-page-background2">
        <section className="article-image-container">
          <div className="flex-parent">
            <div className="flex-child">
              <h3 className="text2-subheading">{props.text2Subheading}</h3>
              <p className="text-control"> {props.text2}</p>
            </div>
            <div className="flex-child-image">
              <img
                className="place-holder"
                src={props.image2}
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
                <h3 className="resources-subheading">{props.charityHeading}</h3>
                <span>{props.urlCharity}</span>
              </div>
              <ul>
                <li className="nav-link-control">
                  {props.urlResources} (Under 16s)
                </li>
                <li className="nav-link-control">
                  {props.urlResources2} (Under 16s)
                </li>
                <li className="nav-link-control">
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

      {/* Challenge section END HERE */}
    </>
  );
};

export default ChallengeItem;
