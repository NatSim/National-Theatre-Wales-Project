import React from "react";
import Consume from "../../images/Consume.jpg";
import "./SAPromptPages.css";

const ConsumePage = () => {
  return (
    <div>
      <h1 className="prompt-text">Your Simple Act is to...</h1>
      <div>
        <img src={Consume} alt="Consume less" />
      </div>
    </div>
  );
};

export default ConsumePage;
