import React from "react";
import Plant from "../../images/Plant.jpg";
import "./SAPromptPages.css";
import PlantArticle from "../../Components/SAArticles/PlantArticle";
import SideNav from "../../Components/Nav/SideNav";

const PlantPage = () => {
  return (
    <>
      <SideNav />
      <div className="plant-page">
        <article>
          <h1 className="prompt-text">Your Simple Act is to...</h1>
          <div className="image-container">
            <img className="image" src={Plant} alt="Plant" />
          </div>
          <PlantArticle />
        </article>
      </div>
    </>
  );
};

export default PlantPage;
