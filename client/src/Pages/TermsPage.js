import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./TermsPage.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="home-button-container">
        <Link to="/home">
          <Button className="button">Home</Button>
        </Link>
      </div>
      <section>
        <h1>Terms {`&`} Conditions</h1>
      </section>
    </div>
  );
};

export default Terms;
