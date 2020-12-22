import React from "react";
import BeKind from "../../images/BeKind.jpg";
import "./SAPromptPages.css";

const BeKindPage = () => {
  return (
    <div>
      <h1 className="prompt-text">Your Simple Act is to...</h1>
      <div>
        <img src={BeKind} alt="Be Kind" />
      </div>
    </div>
  );
};

export default BeKindPage;
