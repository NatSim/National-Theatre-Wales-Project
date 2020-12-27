import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Connect from "../../images/Connect.jpg";
import "./SAPromptPages.css";
import ConnectArticle from "../../Components/SAArticles/ConnectArticle";

const ConnectPage = () => {
  return (
    <div className="connect-page">
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <article>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={Connect} alt="People connecting" />
        </div>
        <ConnectArticle />
      </article>
    </div>
  );
};

export default ConnectPage;
