import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Consider from "../../images/Consider.jpg";
import "./SAPromptPages.css";
import ConsiderArticle from "../../Components/SAArticles/ConsiderArticle";

const ConsiderPage = () => {
  return (
    <div className="consider-page">
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <article>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={Consider} alt="Consider the stars" />
        </div>
        <ConsiderArticle />
      </article>
    </div>
  );
};

export default ConsiderPage;
