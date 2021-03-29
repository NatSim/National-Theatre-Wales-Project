import React from "react";
import "./AboutArticlesPage.css";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import Team from "../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import ReactModal from "../../components/ReactModal/ReactModal";

//Aiming to add this to aboutText file and render here
const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

const AboutArticlesPage = (props) => {
  return (
    <>
      <SideNav />
      <Header />

      <main className="section-color">
        {/* TOP Background-color Container-START HERE */}
        <section className="home-container-video2">
          <div>
            <h2 className="subtitle1">{props.title}</h2>
          </div>
          <div className="video-about-text-control">
            <VideoPlayer url={videoTeam} height={"150px"} className="video" />
          </div>
        </section>
        {/* TOP Background-color Container-END HERE */}

        {/* Background Container-START HERE */}
        <div className="background-outer">
          {/* Add spacing HERE */}
          <div className="info-container">
            <article>{props.mainText1}</article>
            {/* Add spacing HERE */}
            <h3 className="team-subtitle">{props.listTitle}</h3>

            {/* TEAM Member List-START HERE */}
            {
              <ul className={props.listItems ? "list-items-parent" : ""}>
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
            }
            {/* TEAM Member List-END HERE */}

            {/* Add spacing here */}
            <div className="other-text">{props.otherText}</div>

            {/* Image Container-START HERE */}
            <section className="join-team-other-text-container">
              <img className="image-team" src={Team} alt="placeholder" />{" "}
              <img className="image-team" src={Team} alt="placeholder" />{" "}
              <img className="image-team" src={Team} alt="placeholder" />{" "}
            </section>
            {/* Image Container-END HERE */}

            {/* Button Options(SUBSCRIBE or SIGNUP) HERE */}
            <div>{!props.listItems ? <ReactModal /> : props.joinTeam}</div>
          </div>
        </div>
        {/* Background Container-START END */}
      </main>
    </>
  );
};

export default AboutArticlesPage;
