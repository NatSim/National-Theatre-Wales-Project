import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Learn1 from "../../images/Learn1.jpg";
import "./SAPromptPages.css";
import LearnArticle from "../../Components/SAArticles/LearnArticle";

const LearnPage = () => {
  return (
    <div className="learn-page">
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <article>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={Learn1} alt="Learn one new thing" />
        </div>
        <LearnArticle />
      </article>
    </div>
  );
};

export default LearnPage;
