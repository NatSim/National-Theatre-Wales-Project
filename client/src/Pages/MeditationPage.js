import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SimpleActVideo from "../Components/SimpleActVideo";

const MeditationPage = () => {
  return (
    <div>
      <div className="home-button-container">
        <Link to="/home">
          <Button className="button">Home</Button>
        </Link>
      </div>
      <h1>Meditation</h1>
      <div>
        <SimpleActVideo videoId={"xV2FF-YUy94"} />
      </div>
    </div>
  );
};

export default MeditationPage;
