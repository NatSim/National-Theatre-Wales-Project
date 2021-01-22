import React from "react";
import Header from "../../Components/Header/Header";
import Rewards from "../../Components/PageContent/Rewards/Rewards";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  //set state for username
  let username = "Natasha";
  const Greeting = (props) => {
    return <h1 className="welcome">Welcome {username}</h1>;
  };

  return (
    <>
      <Header />
      <header>
        <h1>Profile</h1>
      </header>
      <div>
        <Greeting />
      </div>
      <div>
        <Link to={"/simpleacts"}>Challenges</Link>
      </div>
      <div>
        <h2>Your Rewards</h2>
      </div>
      <Rewards />
    </>
  );
};

export default ProfilePage;
