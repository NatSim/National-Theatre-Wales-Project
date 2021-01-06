import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SimpleActVideo from "../Components/SimpleActVideo";
import SideNav from "../Components/Nav/SideNav";

const MeditationPage = () => {
  return (
    <>
      <SideNav />
      <div>
        <h1>Meditation</h1>
        <div>
          <SimpleActVideo videoId={"xV2FF-YUy94"} />
        </div>
      </div>
    </>
  );
};

export default MeditationPage;
