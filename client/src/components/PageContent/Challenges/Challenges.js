import React from "react";
import BeKind from "../../../images/BeKind.jpg";
import "./Challenges.css";
import SideNav from "../../Nav/SideNav";
import Header from "../../Header/Header";
import * as CgIcons from "react-icons/cg";
import CompleteChallengeButton from "../../Buttons/CompleteChallengeButton";

const Challenges = () => {
  //Header Profile icon/path
  const profileLink = "/profile";
  const profileIcon = <CgIcons.CgProfile className="profile-svg" />;

  return (
    // return 7 challenge content in component below, from array?
    <>
      <SideNav />
      <Header Link={profileLink} Icon={profileIcon} />
      <div className="challenge-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={BeKind} alt="Be Kind" />
          </div>
        </article>
        <CompleteChallengeButton />
      </div>
    </>
  );
};

export default Challenges;
