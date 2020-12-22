import React from "react";
import TakeAWalk from "../../images/TakeAWalk.jpg";
import "./SAPromptPages.css";

const WalkPage = () => {
  return (
    <div>
      <h1 className="prompt-text">Your Simple Act is to...</h1>
      <div>
        <img src={TakeAWalk} alt="Talk a walk" />
      </div>
    </div>
  );
};

export default WalkPage;
