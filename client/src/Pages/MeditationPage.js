import React from "react";
import SimpleActVideo from "../Components/SimpleActVideo";
import SideNav from "../Components/Nav/SideNav";
import "./MeditationPage.css";

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
