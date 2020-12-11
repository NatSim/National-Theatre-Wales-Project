import React from "react";
import Image from "../images/beeimage20.png";
import Image2 from "../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
// import "../Components/Landing.css";

//NTW Image Functional Component

const LargeImage = () => (
  <div className="largeimage">
    <img src={Image} alt="Large Image" />;
    <img src={Image2} alt="Large Image" />;
  </div>
);

export default LargeImage;
