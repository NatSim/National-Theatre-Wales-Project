import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import TakeAWalk from "../../images/TakeAWalk.jpg";
import "./SAPromptPages.css";
import WalkArticle from "../../Components/SAArticles/WalkArticle";

const WalkPage = () => {
  return (
    <div className="walk-page">
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <article>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={TakeAWalk} alt="Talk a walk" />
        </div>
        <WalkArticle />
      </article>
    </div>
  );
};

export default WalkPage;
