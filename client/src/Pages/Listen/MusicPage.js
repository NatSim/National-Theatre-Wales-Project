import React from "react";
import { useTranslation } from "react-i18next";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import "./MusicPage.css";
import SideNav from "../../components/Nav/SideNav";
import AudioPlayer from "../../components/PageContent/AudioPlayer/AudioPlayer";
import Dawn from "../../components/PageContent/AudioPlayer/tracks/dawn.wav";

const MusicPage = (props) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="background-bee-image orange">
        <nav className="sidenav-container">
          <SideNav />
          {/* Translation Button START HERE */}
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
          </div>
          {/* Translation Button END HERE */}
        </nav>
        <main>
          <h2 className="subtitle5">{t("listenContent.1")}</h2>
          <div className="intro-text-container">
            <h3 className="title-text">{t("listenContent.0")}</h3>
          </div>
          {/* Featured Item START HERE */}
          <section className="audio-container-parent">
            <div className="video-container-child">
              <VideoPlayer
                url={t("listenHrefs.0")}
                width={"246px"}
                height={"150px"}
                // style={{
                //   backgroundColor: "rgb(248, 248, 248",
                //   position: "relative",
                // }}
              />
              <div className="title-text-container">
                <span className="title-text">{t("listenContent.2")}</span>
              </div>
            </div>
          </section>
          {/* Featured Item END HERE */}

          {/* List Section START HERE */}
          <div className="temp-audio-container">
            <AudioPlayer trackAudio={Dawn} trackTitle={"Dawn"} />
          </div>
          <section>
            <ol className="audio-container-parent">
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.1")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.2")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.3")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.4")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.5")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.6")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.7")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.8")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.9")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
              <li className="video-container-child">
                <VideoPlayer
                  url={t("listenHrefs.10")}
                  width={"246px"}
                  height={"100px"}
                />
              </li>
            </ol>
          </section>
          {/* List Section END HERE */}
        </main>
      </div>
    </>
  );
};

export default MusicPage;
