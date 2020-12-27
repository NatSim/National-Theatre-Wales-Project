import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Connect from "../../images/Connect.jpg";
import "./SAPromptPages.css";

const ConnectPage = () => {
  return (
    <div>
      <div className="home-button-container">
        <Link to="/simpleacts">
          <Button className="button">Back</Button>
        </Link>
      </div>
      <section>
        <h1 className="prompt-text">Your Simple Act is to...</h1>
        <div>
          <img src={Connect} alt="People connecting" />
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
