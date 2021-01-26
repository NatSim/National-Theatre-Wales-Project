import React from "react";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import bekind from "../../images/BeKind.jpg";
import RewardsPage from "../Rewards/RewardsPage";
import Rewards from "../../Components/PageContent/Rewards/Reward";

const ProfilePage = () => {
  //set state for username
  let username = "Natasha";
  const Greeting = (props) => {
    return <h1 className="welcome">Welcome {username}</h1>;
  };

  return (
    <>
      <Header />
      <div>
        <Greeting />
      </div>
      <div className="profile-background-container">
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
            className="image-control"
            src={bekind}
            alt="simple act be kind"
            className="completed-image-child"
          ></img>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
