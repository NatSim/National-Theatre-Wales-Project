import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Consume from "../../images/Consume.jpg";
import "./SAPromptPages.css";
import ConsumeArticle from "../../Components/SAArticles/ConsumeArticle";

const ConsumePage = () => {
  return (
    <div className="consume-page">
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <article>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={Consume} alt="Consume less" />
        </div>
        <ConsumeArticle />
      </article>
    </div>
  );
};

export default ConsumePage;
