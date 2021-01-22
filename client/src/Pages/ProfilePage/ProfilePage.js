import React from "react";
import Header from "../../Components/Header/Header";
import Rewards from "../../Components/PageContent/Rewards/RewardsPage";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import bekind from "../../images/BeKind.jpg";

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
      <div className="subheadings-container">
        <div className="challenges-container">
          <Link to={"/simpleacts"}>View Challenges</Link>
        </div>

        <div className="rewards-container">
          <Link to={"/rewards"}>
            Your Rewards
            <Rewards />
          </Link>
        </div>
      </div>
      <div className="completed-container">
        <span>Your Completed Challenges</span>
      </div>
      <div className="completed-image-parent">
        <img
          src={bekind}
          alt="simple act be kind"
          className="completed-image-child"
        ></img>
      </div>
    </>
  );
};

export default ProfilePage;
