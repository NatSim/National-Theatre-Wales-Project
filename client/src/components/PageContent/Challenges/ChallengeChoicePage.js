import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
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

  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {/* Challenge top background START HERE */}
      <div className="challenge-page">
        <Header />
        <SideNav />

        <section className="prompt-act-container">
          {/* Translation Button START HERE */}
          <div className="translate-button">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Welsh</button>
            {/* Translation Button END HERE */}
            <hr />
            <div className="prompt-text-container">
              <h1 className="prompt-text">{props.direction}</h1>
              {/* 1.BE KIND PAGE Act Direction START HERE*/}
              <h2 className="act-control-child">
                {props.id_ === 1 ? (
                  <Trans i18nKey="act"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </h2>
              {/* 1.BE KIND PAGE Act Direction END HERE*/}
            </div>
            <div className="intro-text">
              <div className="image-container">
                <img
                  className="image"
                  src={props.image1}
                  alt={"simple act challenge"}
                />
              </div>
              {/* 1.BE KIND PAGE ACT START HERE*/}
              <p className="text-control2">
                {props.id_ === 1 ? (
                  <Trans i18nKey="text1"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </p>
              {/* 1.BE KIND PAGE ACT END HERE*/}
              {/* 2.CONNECT PAGE ACT START HERE*/}
              <p className="text-control2">
                {props.id_ === 2 ? (
                  <Trans i18nKey=""></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </p>
              {/* 2.CONNECT PAGE ACT END HERE*/}
            </div>
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
              {/* 1.BE KIND PAGE Did you know START HERE*/}
              <p className="text-control3">
                {props.id_ === 1 ? (
                  <Trans i18nKey="text2"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </p>
              {/* 1.BE KIND PAGE Did you know END HERE*/}
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
            {/* 1.BE KIND PAGE Did you know START HERE*/}
            <span className="text-control3">
              {/* {props.id_ === 1
                ? i18next.t("links:[]", { returnObjects: true })
                : ""} */}

              {props.id_ === 1 ? (
                <Trans i18nKey="links"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
            </span>

            {/* 1.BE KIND PAGE Did you know END HERE*/}
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
