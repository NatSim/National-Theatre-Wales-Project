import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Plant from "../../images/Plant.jpg";
import "./SAPromptPages.css";
import PlantArticle from "../../Components/SAArticles/PlantArticle";

const PlantPage = () => {
  return (
    <div className="plant-page">
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <article>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={Plant} alt="Plant" />
        </div>
        <PlantArticle />
      </article>
    </div>
  );
};

export default PlantPage;
