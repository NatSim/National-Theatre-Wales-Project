import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const MusicPage = () => {
  return (
    <div>
      <div className="home-button-container">
        <Link to="/home">
          <Button className="button">Home</Button>
        </Link>
      </div>
      <section>
        <h1>Music</h1>
      </section>
    </div>
  );
};

export default MusicPage;
