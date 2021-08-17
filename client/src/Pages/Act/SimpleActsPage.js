import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BeKind from "../../images/Simple7/BeKind.jpg";
import Connect from "../../images/Simple7/Connect.jpg";
import Consider from "../../images/Simple7/Consider.jpg";
import Consume from "../../images/Simple7/Consume.jpg";
import Learn1 from "../../images/Simple7/Learn1.jpg";
import Plant from "../../images/Simple7/Plant.jpg";
import TakeAWalk from "../../images/Simple7/TakeAWalk.jpg";
import "./SimpleActPage.css";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import SideNav from "../../components/Nav/SideNav";

const challengeData = [
  { id: "1", img: BeKind, alt: "Kind" },
  { id: "2", img: Connect, alt: "Connecting" },
  { id: "3", img: Consider, alt: "Consider" },
  { id: "4", img: Consume, alt: "Consume" },
  { id: "5", img: Learn1, alt: "Learn1" },
  { id: "6", img: Plant, alt: "Plant" },
  { id: "7", img: TakeAWalk, alt: "Take a Walk" },
];

const SAPrompts = (props) => {
  return (
    //Reusable component
    <Link to={"/challenge/" + props.id}>
      <img className="image" src={props.img} alt={props.alt} />
    </Link>
  );
};

const SimpleActsPage = (props) => {
  const videoSimple =
    "https://www.youtube.com/watch?v=qxB3-sw2HAQ&feature=emb_logo";

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {/* Background START HERE */}
      <div id="background-simple-acts" className="background-bee-image pink">
        <nav className="sidenav-container">
          <SideNav />
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
            {/* Translation Button END HERE */}
          </div>
        </nav>
        <main>
          <h2 className="subtitle1">{t("title")}</h2>

          {/* Video Container-START HERE */}
          <div className="simple-acts-container-parent">
            <VideoPlayer
              className="simple-acts-video"
              url={videoSimple}
              height="150px"
              width="50%"
              style={{
                margin: "auto",
                padding: "10px",
                border: "3px solid green",
              }}
            />
          </div>

          {/* Background END HERE */}

          {/*SIMPLE ACTS INTRO TEXT-START HERE */}
          <div className="text-container">
            <div className="text-video-row">
              <div className="text-video-column">
                <article className="challenge-text1">{t("article1")}</article>
              </div>
              <div className="text-video-column">
                <article className="challenge-text2">{t("article2")}</article>
              </div>
            </div>
          </div>
          {/*SIMPLE ACTS INTRO TEXT-END HERE */}

          {/* 7 SIMPLE ACTS ICONS Container-START HERE */}
          <span className="challenge-text2">
            <b>{t("exploreSA")}</b>
          </span>
          <section className="flex-container">
            <div className="child-container">
              <div>
                {challengeData &&
                  challengeData.length > 0 &&
                  challengeData.map((challenge) => (
                    <React.Fragment key={challenge.id}>
                      <SAPrompts
                        img={challenge.img}
                        alt={challenge.alt}
                        id={challenge.id}
                      />
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </section>
          {/* 7 SIMPLE ACTS ICONS Container-END HERE */}
          {/* Video Container-END HERE */}
        </main>{" "}
      </div>
    </>
  );
};

export default SimpleActsPage;
