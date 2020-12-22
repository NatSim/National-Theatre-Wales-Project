import React from "react";
import Connect from "../../images/Connect.jpg";
import "./SAPromptPages.css";

const ConnectPage = () => {
  return (
    <div>
      <h1 className="prompt-text">Your Simple Act is to...</h1>
      <div>
        <img src={Connect} alt="People connecting" />
      </div>
    </div>
  );
};

export default ConnectPage;
