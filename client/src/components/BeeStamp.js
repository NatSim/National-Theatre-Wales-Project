import React, { Component } from "react";
import BeeStamp from "../images/whole-beeimage.png";
import "../Components/BeeStamp.css";

function WelcomeBee() {
  return <img className="wholeBee" src={BeeStamp} alt="Large Bee" />;
}

export default WelcomeBee;
