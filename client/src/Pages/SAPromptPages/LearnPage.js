import React from "react";
import Learn1 from "../../images/Learn1.jpg";
import "./SAPromptPages.css";

const LearnPage = () => {
  return (
    <div>
      <h1 className="prompt-text">Your Simple Act is to...</h1>
      <div>
        <img src={Learn1} alt="Learn one new thing" />
      </div>
    </div>
  );
};

export default LearnPage;
