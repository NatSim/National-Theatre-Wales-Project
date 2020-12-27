import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import BeKind from "../../images/BeKind.jpg";
import "./SAPromptPages.css";
import BeKindArticle from "../../Components/SAArticles/BeKindArticle";

const BeKindPage = () => {
  return (
    <div className="kind-page">
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <article>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={BeKind} alt="Be Kind" />
        </div>
        <BeKindArticle />
      </article>
    </div>
  );
};

export default BeKindPage;
