import React from "react";
import Image from "../images/beeimage20.png";
import Image2 from "../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import "./LargeImage.css";

//NTW Image Functional Component

const LargeImage = () => (
  <div className="largeimage">
    <img className="bee1" src={Image} alt="Large Image" />
    <img className="team2" src={Image2} alt="Large Image" />
  </div>
);

export default LargeImage;
