import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import "./MusicPage.css";
import SideNav from "../../components/Nav/SideNav";

const MusicPage = () => {
  const videoMusic = "https://www.youtube.com/watch?v=K37qZvu5zio";
  const soundCloudExample =
    "https://soundcloud.com/lavish/informal-never-look-back";

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header />
      <SideNav />
      <main className="home-container-video4">
        {/* Translation Button START HERE */}
        <div className="translate-button">
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
          {/* Translation Button END HERE */}
          <hr />
        </div>
        <h2 className="subtitle1">{t("listenContent.1")}</h2>
        <div className="intro-text-container">
          <span>{t("listenContent.0")}</span>
        </div>
        {/* Featured Item START HERE */}
        <section className="audio-container-parent">
          <div className="video-container-child">
            <VideoPlayer url={videoMusic} width={"246px"} height={"150px"} />
            <div className="title-text-container">
              <span className="title-text">{t("listenContent.2")}</span>
            </div>
          </div>
        </section>
        {/* Featured Item END HERE */}

        {/* List Section START HERE */}
        <section>
          <ol className="audio-container-parent">
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
            <li className="video-container-child">
              <VideoPlayer
                url={soundCloudExample}
                width={"246px"}
                height={"100px"}
              />
            </li>
          </ol>
        </section>
        {/* List Section END HERE */}
      </main>
    </>
  );
};

export default MusicPage;
