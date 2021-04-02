import React from "react";
import "./AboutArticlesPage.css";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import Team from "../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import ReactModal from "../../components/ReactModal/ReactModal";
//**IMAGE IMPORTS HERE */
import Festival from "../../images/TEAM/Festival.jpg";
import TideTEAMSocial from "../../images/TEAM/TideTEAMSocial.jpg";
import TideWhisperer3 from "../../images/TEAM/TideWhisperer3.jpg";
import YGeginNTW from "../../images/TEAM/YGegin.jpg";
import NTWlogo from "../../images/logos/NTWLogo/NTW_Logo.png";
//Aiming to add this to aboutText file and render here
const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

/*TEAM Images*/

const AboutArticlesPage = (props) => {
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
          <div>
            <h2 className="subtitle1">{props.title}</h2>
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
          {/* Add spacing HERE */}
          <div
            className={
              !props.otherText ? "info-container" : "team-info-container"
            }
          >
            <article className="article-line-control">
              {props.mainText1}
            </article>

            {/* Add spacing HERE */}
            <h3 className="team-subtitle">{props.listTitle}</h3>

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
                    <li className={props.listItems ? "list-items" : ""}>
                      {props.listItems}
                    </li>
                    <li className={props.listItems ? "list-items" : ""}>
                      {props.listItem2}
                    </li>
                    <li className={props.listItems ? "list-items" : ""}>
                      {props.listItem3}
                    </li>
                    <li className={props.listItems ? "list-items" : ""}>
                      {props.listItem4}
                    </li>
                    <li className={props.listItems ? "list-items" : ""}>
                      {props.listItem5}
                    </li>
                    <li className={props.listItems ? "list-items" : ""}>
                      {props.listItem6}
                    </li>
                    <li className={props.listItems ? "list-items" : ""}>
                      {props.listItem7}
                    </li>
                  </ul>
                </div>
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
                      src={NTWlogo}
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
                  src={props.otherText ? TideWhisperer3 : Team}
                  alt="placeholder"
                />
                <img
                  className="image-team"
                  src={props.otherText ? YGeginNTW : Team}
                  alt="placeholder"
                />
              </section>
            </section>

            {/* Image Container-END HERE */}

            {/* Other Text container START HERE*/}
            <section className={props.otherText ? "spacing-container" : ""}>
              <div className="other-text">{props.otherText}</div>
            </section>
            {/* Other Text container END HERE*/}

            {/* Button Options(SUBSCRIBE or SIGNUP) HERE */}
            <div>{!props.listItems ? <ReactModal /> : props.joinTeam}</div>
          </div>
          <img
            className="image-team"
            src={props.otherText ? TideTEAMSocial : Team}
            alt="placeholder"
          />
        </div>
        {/* Background Container-START END */}
      </main>
    </>
  );
};

export default AboutArticlesPage;
