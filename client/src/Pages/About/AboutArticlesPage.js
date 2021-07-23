import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./AboutArticlesPage.css";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Projection from "../../images/connect/NTWHaverHub_projection.jpg";
import YPeople from "../../images/connect/young_people.jpeg";
import YPeople2 from "../../images/connect/young_people2.jpeg";
import NTWperformance from "../../images/connect/performancepartyPembs.jpg";
import HeadSetImage from "../../images/connect/headsetTEAMSocial5.jpg";
import CafeImage from "../../images/connect/cafeImageTEAM.jpeg";
//**IMAGE IMPORTS HERE */
import Festival from "../../images/TEAM/Festival.jpg";
import TideTEAMSocial from "../../images/TEAM/TideTEAMSocial.jpg";
import TideWhisperer3 from "../../images/TEAM/TideWhisperer3.jpg";
import YGeginNTW from "../../images/TEAM/YGegin.jpg";
import NTWlogo from "../../images/logos/NTWLogo/NTW_Logo.png";
import Button from "react-bootstrap/esm/Button";
//Aiming to add this to aboutText file and render here
const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";
const videoNTW = "https://www.youtube.com/watch?v=BAV-BYPjnv8";

/*TEAM Images*/

const AboutArticlesPage = (props) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const removeBeeBackground = (props) => {
    if (!props.LandingPage) {
      //condition needs to be checked before landing page render
      document.body.classList.remove("background-bee-image");

      console.log("REMOVE BEE BACKGROUND!");
    }
  };

  // removeBeeBackground(props);

  return (
    <>
      <SideNav />

      <div>
        {/* NTW/TEAM Top Background-color Container-START HERE */}
        <section
          className={
            props.otherText ? "home-container-video2" : "home-container-video2a"
          }
        >
          {/* Translation Button START HERE */}
          <div className="translate-button">
            <div className="translate-button-control">
              <button onClick={() => changeLanguage("en")}>En</button>
              <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
              <hr />
            </div>
          </div>
          {/* Translation Button END HERE */}
          {/* Title container START HERE*/}
          <h2 className="title-team-ntw-subtitle">
            {!props.otherText ? (
              <div id="ntw-title">
                <Trans i18nKey="title_ntw"></Trans>
              </div>
            ) : (
              <div id="team-title">
                <Trans i18nKey="title_team"></Trans>
              </div>
            )}
          </h2>
          {/*Title container END HERE*/}

          {/* Video container START HERE */}
          <div className="video-about-text-control">
            <VideoPlayer
              url={props.otherText ? videoTeam : videoNTW}
              height={"150px"}
              width={"246px"}
              style={{
                margin: "auto",
                padding: "10px",
                border: "3px solid",
              }}
            />
          </div>
          {/* Video container START HERE */}
        </section>
        {/* NTW/TEAM Top Background-image Container-END HERE */}

        {/* Main Content Container-START HERE */}
        <main>
          {/*Spacing HERE */}
          {/* NTW PAGE ONLY HERE START*/}
          <section
            className={!props.otherText ? "join-team-other-text-container" : ""}
          >
            {!props.otherText ? (
              <img className="image-team" src={NTWlogo} alt="placeholder" />
            ) : (
              ""
            )}
          </section>
          {/* NTW PAGE ONLY HERE START*/}
          {/* Main Description Text START HERE */}
          <article className="article-line-control">
            <span>
              {!props.otherText ? (
                <Trans i18nKey="description2"> </Trans>
              ) : (
                <Trans i18nKey="description1.part1"> </Trans>
              )}
            </span>
            <span>
              {props.otherText ? (
                <Trans i18nKey="description1.part2"> </Trans>
              ) : (
                ""
              )}
            </span>
          </article>
          <br />
          {/* Main Description Text END HERE */}

          {/* TEAM PAGE ONLY Join List-START HERE */}
          <section className={props.otherText ? "spacing-container" : ""}>
            {/* List Title  */}
            <h3 className="team-subtitle">
              {props.otherText ? <Trans i18nKey="list.subtitle"> </Trans> : ""}
            </h3>

            {/* List and Image Container START HERE */}
            <div className={props.otherText ? "list-image-control" : ""}>
              <div className={props.otherText ? "list-image-container" : ""}>
                <ul
                  className={
                    props.listItems ? "list-items-parent" : "list-show-none"
                  }
                >
                  <li>
                    {props.listItems ? (
                      <Trans i18nKey="list.item1"> </Trans>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {" "}
                    {props.listItems ? (
                      <Trans i18nKey="list.item2"> </Trans>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {" "}
                    {props.listItems ? (
                      <Trans i18nKey="list.item3"> </Trans>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {" "}
                    {props.listItems ? (
                      <Trans i18nKey="list.item4"> </Trans>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {" "}
                    {props.listItems ? (
                      <Trans i18nKey="list.item5"> </Trans>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {" "}
                    {props.listItems ? (
                      <Trans i18nKey="list.item6"> </Trans>
                    ) : (
                      ""
                    )}
                  </li>
                  <li>
                    {" "}
                    {props.listItems ? (
                      <Trans i18nKey="list.item7"> </Trans>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
              {/* List Item TEAM PAGE END HERE */}
              {/* TEAM 1IMAGE & NTW PAGE 2IMAGES START HERE */}
              <div className="list-image-conatiner">
                {props.otherText ? (
                  <img
                    className="image-team"
                    src={Festival}
                    alt="placeholder"
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* TEAM NTW PAGE IMAGES END HERE */}
          </section>
          {/* TEAM Member List-END HERE */}

          {/* BOTH PAGES lower Image Container-START HERE */}
          <section className="spacing-container">
            <section className="join-team-other-text-container">
              <div className="image-control-team">
                <img
                  className="image-team"
                  src={props.otherText ? TideWhisperer3 : YPeople2}
                  alt="placeholder"
                  width="100%"
                />
                <img
                  className="image-team"
                  src={props.otherText ? YGeginNTW : YPeople}
                  alt="placeholder"
                  width="100%"
                />
              </div>
              <div>
                <img
                  className="image-team"
                  src={props.otherText ? NTWperformance : Projection}
                  width="100%"
                  alt="placeholder"
                />
                <img
                  className="image-team"
                  src={props.otherText ? CafeImage : HeadSetImage}
                  width="100%"
                  alt="placeholder"
                />
              </div>
            </section>
          </section>
          {/* Image Container-END HERE */}
          {/* Join TEAM Text(Other Text) container START HERE*/}
          <section className={"spacing-container"}>
            <h3 className="team-subtitle">
              {props.otherText ? (
                <Trans i18nKey="joiningText.subtitle"> </Trans>
              ) : (
                ""
              )}

              <ul
                className={
                  props.listItems ? "list-items-parent" : "list-show-none"
                }
              >
                <li>
                  {props.listItems ? (
                    <Trans i18nKey="joiningText.part1"> </Trans>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  {props.listItems ? (
                    <Trans i18nKey="joiningText.part2"> </Trans>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </h3>
          </section>
          {/* Other Text container END HERE*/}
          {/* Button Options(SUBSCRIBE or SIGNUP) HERE */}
          <section className={"spacing-container"}>
            <div>
              {!props.listItems ? (
                <>
                  <p className="subscribe-text-call-to-action">
                    {t("subscribeText")}
                  </p>
                  <Button
                    href={t("subscribeHref")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("subscribeButton")}
                  </Button>
                </>
              ) : (
                <div className="sign-up-control">
                  <a href={t("signUpHref")} target="blank" rel="noreferrer">
                    {t("signUpText")}{" "}
                  </a>
                </div>
              )}
            </div>
            {props.listItems ? (
              <img
                className="image-team"
                src={props.otherText ? TideTEAMSocial : ""}
                alt={props.otherText ? "placeholder" : ""}
              />
            ) : (
              ""
            )}
          </section>
        </main>
        {/* Main Content Container- END HERE*/}
      </div>
    </>
  );
};

export default AboutArticlesPage;
