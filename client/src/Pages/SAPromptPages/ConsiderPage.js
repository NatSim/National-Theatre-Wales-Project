import React from "react";
import Consider from "../../images/Consider.jpg";
import "./SAPromptPages.css";

const ConsiderPage = () => {
  return (
    <div>
      <h1 className="prompt-text">Your Simple Act is to...</h1>
      <div>
        <img src={Consider} alt="Consider the stars" />
      </div>
    </div>
  );
};

export default ConsiderPage;
