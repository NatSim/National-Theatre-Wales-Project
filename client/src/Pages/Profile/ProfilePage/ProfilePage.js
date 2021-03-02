import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import "../ProfilePage.css";
import Rewards from "../../../components/PageContent/Rewards/Reward";
import * as CgIcons from "react-icons/cg";
import ChallengeLogic from "../../../components/PageContent/Challenges/ChallengeLogic";

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

  useEffect(() => {
    //this function gets the challenges from the local storage
    const getChallenges = () => {
      //data in the local storage

      const storageChallenge = JSON.parse(localStorage.getItem("challenge"));

      setChallenge(storageChallenge);

      console.log(storageChallenge);

      console.log("receiving challenge image");
    };
    getChallenges([]);
  }, []);

  return (
    <>
      <Header Link={loginLink} Icon={loginIcon} />

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
            <img
              className="completed-image-child"
              src={ChallengeLogic.image}
              alt="completed challenges"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
