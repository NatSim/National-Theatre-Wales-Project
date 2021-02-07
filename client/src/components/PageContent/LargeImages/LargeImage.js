import React from "react";
import Image from "../../../images/beeimage20.png";

//NTW Image Functional Component

const LargeImage = () => (
  <div className="largeimage">
    <div className="flex-container">
      <img className="bee1" src={Image} alt="Large half Bee" />
    </div>
  </div>
);

export default LargeImage;
