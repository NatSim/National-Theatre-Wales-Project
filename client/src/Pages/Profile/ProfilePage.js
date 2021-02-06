import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import bekind from "../../images/BeKind.jpg";
import Rewards from "../../components/PageContent/Rewards/Reward";
import * as CgIcons from "react-icons/cg";

const ProfilePage = () => {
  //Header Profile icon/path
  const loginLink = "/profile";
  const loginIcon = [<CgIcons.CgProfile className="profile-svg" />];

  //set state for username
  let username = "Natasha";
  const Greeting = (props) => {
    return <h2 className="subtitle">Welcome {username}</h2>;
  };

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
        </div>
        <div className="completed-container">
          <span className="completed-text">Your Completed Challenges</span>
        </div>
        <div className="completed-image-parent">
          <img
            className="completed-image-child"
            src={bekind}
            alt="simple act be kind"
          ></img>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
