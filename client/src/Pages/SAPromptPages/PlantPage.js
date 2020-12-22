import React from "react";
import Plant from "../../images/Plant.jpg";
import "./SAPromptPages.css";

const PlantPage = () => {
  return (
    <div>
      <h1 className="prompt-text">Your Simple Act is to...</h1>
      <div>
        <img src={Plant} alt="Plant" />
      </div>
    </div>
  );
};

export default PlantPage;
