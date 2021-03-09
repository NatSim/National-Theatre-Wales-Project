import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import "../ProfilePage.css";
import Rewards from "../../../components/PageContent/Rewards/Reward";
import * as CgIcons from "react-icons/cg";
import SideNav from "../../../components/Nav/SideNav";
import { challengeData, SAPrompts } from "../../Act/SimpleActsPage";

const ProfilePage = (props) => {
  const [challenge, setChallenge] = useState([]);

  //Header Profile icon/path
  const loginLink = "/profile";
  const loginIcon = <CgIcons.CgProfile className="profile-svg" />;

  //set state for username
  let username = "Username";
  const Greeting = (props) => {
    return <h2 className="subtitle1">Welcome {username}</h2>;
  };
  //Fake example version
  const natashaProfile = {
    email: "natsimbig@gmail.com",
    password: "1234",
    challenge: ["6", "5", "3"],
  };
  useEffect(() => {
    if (challenge.length === 0) {
      const completedChallenges = challengeData.filter((challenge) =>
        natashaProfile.challenge.includes(challenge.id)
      );
      setChallenge(completedChallenges);
    }
  }, [challenge]);

  return (
    <>
      <Header Link={loginLink} Icon={loginIcon} />
      <SideNav />
      <div className="profile-background-container">
        <div>
          <Greeting />
        </div>
        <div className="subheadings-container">
          <div className="challenges-container">
            <Link to={"/simpleacts"}>View Challenges</Link>
          </div>

          <div className="rewards-container">
            <Link to={"/reward"}>
              My Rewards
              <Rewards />
            </Link>
          </div>
          <div className="challenges-container">
            <Link to={"/account"}>My Account</Link>
          </div>
        </div>
        <div className="completed-container">
          <span className="completed-text">My Completed Challenges</span>
          {/* display the completed challenge image */}
        </div>
        <div className="completed-image-parent">
          <div className="image-border">
            {challenge.map((i) => (
              <SAPrompts id={i.id} img={i.img} alt={i.alt} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
