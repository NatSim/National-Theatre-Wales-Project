import React from "react";
import "./AboutTeamPage.css";
import AboutTeam from "../../Components/PageContent/AboutInfo/AboutTeam";
import SideNav from "../../Components/Nav/SideNav";
import VideoPlayer from "../../Components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../Components/Header/Header";

function AboutTeamPage() {
  const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

  return (
    <>
      <SideNav />
      <Header />
      <div className="section-color">
        <div className="home-container-video2">
          <VideoPlayer url={videoTeam} className="video" />
        </div>
        <div className="background-outer">
          <article>
            <div className="info-container">
              <AboutTeam />
            </div>
          </article>
        </div>
        <footer id="footer-banner" className="copyright-footer">
          Copyright © National Theatre Wales. Website developed by Natasha
          Simone. Registered Company No. 6693227 Charity Registration No.
          1127952
        </footer>
      </div>
    </>
  );
}

export default AboutTeamPage;
