import React, { useState } from "react";
import "./AboutArticlesPage.css";
import SideNav from "../../components/Nav/SideNav";
import VideoPlayer from "../../components/PageContent/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import Team from "../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import ReactModal from "../../components/ReactModal/ReactModal";

//Aiming to use one page component and render different info using props
const videoTeam = "https://www.youtube.com/watch?v=xV2FF-YUy94";

const AboutArticlesPage = (props) => {
  const [showButton, setShowButton] = useState(false);

  function addButton() {
    setShowButton(true);
  }

  return (
    <>
      <SideNav />
      <Header />
      <div className="section-color">
        <div className="home-container-video2">
          <div>
            <h2 className="subtitle1">{props.title}</h2>
          </div>
          <div className="video-about-text-control">
            <VideoPlayer url={videoTeam} height={"150px"} className="video" />
          </div>
        </div>
        <div className="background-outer">
          <div className="info-container">
            <span>{props.mainText1}</span>
            <br />

            <h3 className="team-subtitle">{props.listTitle}</h3>
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

            <br />
            <div className="join-team-other-text-container">
              <div className="other-text">{props.otherText}</div>
              <img className="image-team" src={Team} alt="placeholder" />
            </div>
            <div>{!props.listItems ? <ReactModal /> : props.joinTeam}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArticlesPage;
