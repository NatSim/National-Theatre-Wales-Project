import React from "react";
import MainBeeLogo from "../../../images/logos/MainBeeLogo/GTTB_Logo.jpg";

//NTW Image Functional Component

const LargeImage = () => (
  <div className="largeimage">
    <div className="flex-container">
      <img className="main-bee-logo" src={MainBeeLogo} alt="Large half Bee" />
    </div>
  </div>
);

export default LargeImage;
