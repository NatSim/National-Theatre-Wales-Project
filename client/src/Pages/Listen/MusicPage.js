import React from "react";
import { useTranslation } from "react-i18next";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import "./MusicPage.css";
import SideNav from "../../components/Nav/SideNav";
import AudioPlayer from "../../components/PageContent/AudioPlayer/AudioPlayer";
import Dawn from "../../components/PageContent/AudioPlayer/tracks/dawn.wav";
import CatchThisQuiet from "../../components/PageContent/AudioPlayer/tracks/catchthisquiet.mp3";
import Dryw from "../../components/PageContent/AudioPlayer/tracks/dryw.wav";
import Gwenyn from "../../components/PageContent/AudioPlayer/tracks/gwenyn.wav";
import JustToBee from "../../components/PageContent/AudioPlayer/tracks/JustToBee.mp3";
import Merfolk from "../../components/PageContent/AudioPlayer/tracks/merfolk.wav";
import Petra from "../../components/PageContent/AudioPlayer/tracks/petra.wav";
import Stars from "../../components/PageContent/AudioPlayer/tracks/stars.wav";
import Trees from "../../components/PageContent/AudioPlayer/tracks/trees.wav";
import Ywen from "../../components/PageContent/AudioPlayer/tracks/ywen.wav";

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
                url={t("listenHrefs")}
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

          <section>
            <ol className="audio-container-parent">
              <li className="audio-container-control">
                <AudioPlayer
                  trackAudio={Dawn}
                  trackTitle={t("listenTrackTitle.0")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={CatchThisQuiet}
                  trackTitle={t("listenTrackTitle.1")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={Dryw}
                  trackTitle={t("listenTrackTitle.2")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={Gwenyn}
                  trackTitle={t("listenTrackTitle.3")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={JustToBee}
                  trackTitle={t("listenTrackTitle.4")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={Merfolk}
                  trackTitle={t("listenTrackTitle.5")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={Petra}
                  trackTitle={t("listenTrackTitle.6")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={Stars}
                  trackTitle={t("listenTrackTitle.7")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={Trees}
                  trackTitle={t("listenTrackTitle.8")}
                />
              </li>
              <li className="video-container-child">
                <AudioPlayer
                  trackAudio={Ywen}
                  trackTitle={t("listenTrackTitle.9")}
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
