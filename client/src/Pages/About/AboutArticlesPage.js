import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "./AboutArticlesPage.css";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import Team from "../../images/TEAM/Tide-Whisperer-TEAM-Social-1-1.jpg";
import Projection from "../../images/connect/NTWHaverHub_projection.jpg";
import YPeople from "../../images/connect/young_people.jpeg";
import YPeople2 from "../../images/connect/young_people2.jpeg";
//**IMAGE IMPORTS HERE */
import Festival from "../../images/TEAM/Festival.jpg";
import TideTEAMSocial from "../../images/TEAM/TideTEAMSocial.jpg";
import TideWhisperer3 from "../../images/TEAM/TideWhisperer3.jpg";
import YGeginNTW from "../../images/TEAM/YGegin.jpg";
import NTWlogo from "../../images/logos/NTWLogo/NTW_Logo.png";
import Button from "react-bootstrap/esm/Button";
//Aiming to add this to aboutText file and render here
const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

/*TEAM Images*/

const AboutArticlesPage = (props) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <SideNav />
      <Header />

      <main className="section-color">
        {/* TOP Background-color Container-START HERE */}
        <section
          className={
            props.otherText ? "home-container-video2" : "home-container-video2a"
          }
        >
          {/* Translation Button START HERE */}
          <div className="translate-button">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Welsh</button>
            {/* Translation Button END HERE */}
            <hr />

            {/* Title container START HERE*/}
            <div className="title-team-ntw-subtitle">
              {!props.otherText ? (
                <Trans i18nKey="title_ntw" className></Trans>
              ) : (
                <Trans i18nKey="title_team"></Trans>
              )}
            </div>
            {/*Title container END HERE*/}
          </div>

          <div className="video-about-text-control">
            <VideoPlayer
              url={videoTeam}
              height={"150px"}
              width={"246px"}
              style={{
                margin: "auto",
                padding: "10px",
                border: "3px solid",
              }}
            />
          </div>
        </section>
        {/* TOP Background-color Container-END HERE */}

        {/* Background Container-START HERE */}
        <div className="background-outer">
          {/*Spacing HERE */}
          <div
            className={
              !props.otherText ? "info-container" : "team-info-container"
            }
          >
            {/* NTW PAGE ONLY HERE */}
            <section className="join-team-other-text-container">
              {!props.otherText ? (
                <img className="image-team" src={NTWlogo} alt="placeholder" />
              ) : (
                ""
              )}
            </section>
            {/* Main Description Text START HERE */}
            <article className="article-line-control">
              <div>
                {!props.otherText ? (
                  <Trans i18nKey="description2"> </Trans>
                ) : (
                  <Trans i18nKey="description1.part1"> </Trans>
                )}
              </div>
              <div>
                {props.otherText ? (
                  <Trans i18nKey="description1.part2"> </Trans>
                ) : (
                  ""
                )}
              </div>
            </article>
            <br />
            {/* Main Description Text END HERE */}

            {/* List Title  */}

            <h3 className="team-subtitle">
              {props.otherText ? <Trans i18nKey="list.subtitle"> </Trans> : ""}
            </h3>
            {/* TEAM Member List-START HERE */}
            <section className={props.otherText ? "spacing-container" : ""}>
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
                <div className="list-image-conatiner">
                  {props.otherText ? (
                    <img
                      className="image-team"
                      src={Festival}
                      alt="placeholder"
                    />
                  ) : (
                    <img
                      className="ntw-logo-about"
                      src={Projection}
                      alt="NTW logo"
                    />
                  )}
                </div>
              </div>
              {/* List and Image Container END HERE */}
            </section>

            {/* TEAM Member List-END HERE */}

            {/* Image Container-START HERE */}
            <section className="spacing-container">
              <section className="join-team-other-text-container">
                <img
                  className="image-team"
                  src={props.otherText ? TideWhisperer3 : YPeople2}
                  alt="placeholder"
                />
                <img
                  className="image-team"
                  src={props.otherText ? YGeginNTW : YPeople}
                  alt="placeholder"
                />
              </section>
            </section>

            {/* Image Container-END HERE */}

            {/* Join TEAM Text(Other Text) container START HERE*/}
            <section className={props.otherText ? "spacing-container" : ""}>
              <div className="other-text">
                {props.otherText ? (
                  <Trans i18nKey="joiningText.subtitle"> </Trans>
                ) : (
                  ""
                )}
              </div>
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
            </section>
            {/* Other Text container END HERE*/}

            {/* Button Options(SUBSCRIBE or SIGNUP) HERE */}
            <div>
              {!props.listItems ? (
                <Button
                  href={t("subscribeHref")}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("subscribeButton")}
                </Button>
              ) : (
                <div className="sign-up-control">{props.joinTeam}</div>
              )}
            </div>
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
        </div>
        {/* Background Container-START END */}
      </main>
    </>
  );
};

export default AboutArticlesPage;
