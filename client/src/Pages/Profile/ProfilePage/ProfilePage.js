import React, { useState, useEffect } from "react";
import Header from "../../../components/Header/Header";
import { Link } from "react-router-dom";
import "../ProfilePage.css";
import bekind from "../../../images/BeKind.jpg";
import Rewards from "../../../components/PageContent/Rewards/Reward";
import * as CgIcons from "react-icons/cg";

const ProfilePage = () => {
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
      if (localStorage.getItem("challenge") !== null) {
        const storageChallenge = JSON.parse(localStorage.getItem("challenge"));
        setChallenge(storageChallenge);
      }
    };
    getChallenges();
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
          {challenge.map((item) => {
            return (
              <>
                <img src={item.props.image} alt="completed challenges" />
              </>
            );
          })}
        </div>
        <div className="completed-image-parent">
          <div className="image-border">
            <img
              className="completed-image-child"
              src={bekind}
              alt="simple act be kind"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
