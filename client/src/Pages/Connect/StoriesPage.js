import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";

const StoriesPageA = (props) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <SideNav />
      <Header />
      <main className="section-color">
        <div className="home-container-video5">
          {/* Translation Button START HERE */}
          <div className="translate-button">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Welsh</button>
            {/* Translation Button END HERE */}
            <hr />
          </div>
          <span>
            <h2 className="subtitle2">{t("storiesContent.0")}</h2>
          </span>
          <section className="video-container-parent">
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono1}
                width={"246px"}
                height={"150px"}
              />
            </div>
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono2}
                width={"246px"}
                height={"150px"}
              />
            </div>
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono1}
                width={"246px"}
                height={"150px"}
              />
            </div>
            <div className="video-container-child">
              <VideoPlayer
                url={props.videoMono2}
                width={"246px"}
                height={"150px"}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
export default StoriesPageA;
