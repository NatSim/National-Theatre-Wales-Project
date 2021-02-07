import React from "react";
import Image2 from "../../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import "./LargeImage.css";

//NTW Image Functional Component

const LargeImage = () => (
  <div className="largeimage">
    <div className="flex-container">
      <img className="team2" src={Image2} alt="NTWTeam" />
    </div>
  </div>
);

export default LargeImage;
