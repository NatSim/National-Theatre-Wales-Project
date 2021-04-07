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
              <h1 className="prompt-text">
                {/* 1.BE KIND PAGE  Direction START HERE*/}
                {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                  <Trans i18nKey="direction"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 1.BE KIND PAGE Direction END HERE*/}
              </h1>

              {/* 1.BE KIND PAGE Act START HERE*/}
              <h2 className="act-control-child">
                {props.id_ === 1 ? (
                  <Trans i18nKey="act"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 1.BE KIND PAGE Act END HERE */}
                {/* 2.CONNECT PAGE  Act START HERE*/}

                {props.id_ === 2 ? (
                  <Trans i18nKey="act2"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 2.CONNECT PAGE Act END HERE*/}
                {/* 3.CONSIDER THE STARS PAGE Act START HERE */}
                {props.id_ === 3 ? (
                  <Trans i18nKey="act3"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 3.CONSIDER THE STARS PAGE Act END HERE */}
                {/* 4.CONSUME PAGE Act START HERE */}
                {props.id_ === 4 ? (
                  <Trans i18nKey="act4"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 4.CONSUME PAGE Act START HERE */}
                {/* 5.LEARN PAGE Act STARTS HERE */}
                {props.id_ === 5 ? (
                  <Trans i18nKey="act5"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 5.LEARN PAGE Act STARTS HERE */}
              </h2>
            </div>
            <div className="intro-text">
              <div className="image-container">
                <img
                  className="image"
                  src={props.image1}
                  alt={"simple act challenge"}
                />
              </div>
              {/* 1.BE KIND PAGE ACT Text1 START HERE*/}
              <p className="text-control2">
                {props.id_ === 1 ? (
                  <Trans i18nKey="text1"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </p>
              {/* 1.BE KIND PAGE ACT Text1 END HERE*/}
              {/* 2.CONNECT PAGE ACT Text1a START HERE*/}
              <p className="text-control2">
                {props.id_ === 2 ? (
                  <Trans i18nKey="text1a"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
              </p>
              {/* 2.CONNECT PAGE ACT Text1a END HERE*/}
              {/* 3.CONNECT PAGE text1b START HERE */}
              {props.id_ === 3 ? (
                <Trans i18nKey="text1b"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 3.CONNECT PAGE text1b END HERE */}
              {/* 4.CONSUME PAGE text1c START HERE */}
              {props.id_ === 4 ? (
                <Trans i18nKey="text1c"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 4.CONSUME PAGE text1c START HERE */}
              {/* 5.LEARN PAGE Act STARTS HERE */}
              {props.id_ === 5 ? (
                <Trans i18nKey="text1d"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 5.LEARN PAGE Act STARTS HERE */}
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
              <h3 className="text2-subheading">
                {/* BE KIND text2Subheading START HERE */}
                {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                  <Trans i18nKey="text2Subheading"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* BE KIND text2Subheading END HERE */}
              </h3>
              {/* 1.BE KIND PAGE Did you know START HERE*/}
              <p className="text-control3">
                {props.id_ === 1 ? (
                  <Trans i18nKey="text2"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}{" "}
                {/* 1.BE KIND PAGE Did you know END HERE*/}
                {/* 2.CONNECT PAGE Did you know START HERE*/}
                {props.id_ === 2 ? (
                  <Trans i18nKey="text2a"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 2.CONNECT PAGE Did you know END HERE*/}
                {/* 3.CONNECT THE STARS Did you know START HERE */}
                {props.id_ === 3 ? (
                  <Trans i18nKey="text3"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 3.CONNECT THE STARS Did you know END HERE */}
                {/* 4.CONSUME PAGE Act START HERE */}
                {props.id_ === 4 ? (
                  <Trans i18nKey="text4"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 4.CONSUME PAGE Act START HERE */}
                {/* 5.LEARN PAGE Act STARTS HERE */}
                {props.id_ === 5 ? (
                  <Trans i18nKey="text5"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* 5.LEARN PAGE Act STARTS HERE */}
              </p>
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
            {/* 1.BE KIND PAGE Discover subheading START HERE*/}
            <h3 className="discover-subheading">
              {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                <Trans i18nKey="discoverSubheading"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 1.BE KIND PAGE discover subheading END HERE*/}
            </h3>
            <span>
              {props.urlFilm} {props.urlBook} {props.urlArtist}
            </span>
            {/* 1.BE KIND PAGE discover links START HERE*/}
            <span className="text-control3">
            i18next.t('arrayJoin', { joinArrays: '+' });
              {/* {props.id_ === 1 ? (
                <Trans i18nKey="links"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )} */}
              {/* 1.BE KIND PAGE discover links END HERE*/}
              {/* 2.CONNECT PAGE discover links START HERE */}
              {props.id_ === 2 ? (
                <Trans i18nKey="links2"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 2.CONNECT PAGE discover links END HERE */}
              {/* 3.CONSIDER THE STARS PAGEdiscover links START HERE */}
              {props.id_ === 3 ? (
                <Trans i18nKey="links3"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 3.CONSIDER THE STARS PAGEdiscover links END HERE */}
              {/* 4.CONSUME PAGE Act START HERE */}
              {/* 4.CONSUME PAGE Act START HERE */}
              {/* 5.LEARN PAGE Act STARTS HERE */}
              {/* 5.LEARN PAGE Act STARTS HERE */}
            </span>

            <div className="flex-child">
              {/* BE KIND PAGE resources heading START HERE */}

              <h3 className="resources-subheading">
                {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                  <Trans i18nKey="resourceSubheading"></Trans>
                ) : (
                  <Trans i18nKey=""></Trans>
                )}
                {/* BE KIND PAGE resources heading END HERE */}
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
            <h3 className="quote-heading">
              {/* 1.BE KIND PAGE Quote heading START HERE*/}
              {props.id_ === 1 || 2 || 3 || 4 || 5 || 6 || 7 ? (
                <Trans i18nKey="quoteSubheading"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
            </h3>
            <p>
              {/* 1.BE KIND PAGE Quote START HERE*/}
              {props.id_ === 1 ? (
                <Trans i18nKey="quote"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 1.BE KIND PAGE Quote END HERE*/}
              {/* 2.CONNECT PAGE Quote START HERE*/}
              {props.id_ === 2 ? (
                <Trans i18nKey="quote2"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 2.CONNECT PAGE Quote END HERE*/}
              {/* 3.CONSIDER THE STARS Quote START HERE */}
              {props.id_ === 3 ? (
                <Trans i18nKey="quote3"></Trans>
              ) : (
                <Trans i18nKey=""></Trans>
              )}
              {/* 3.CONSIDER THE STARS Quote END HERE */}
              {/* 4.CONSUME PAGE Act START HERE */}
              {/* 4.CONSUME PAGE Act START HERE */}
              {/* 5.LEARN PAGE Act STARTS HERE */}
              {/* 5.LEARN PAGE Act STARTS HERE */}
            </p>
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
