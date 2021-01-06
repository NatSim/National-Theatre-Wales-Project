import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SideNav from "../Components/Nav/SideNav";

const MusicPage = () => {
  return (
    <>
      <SideNav />
      <div>
        <div className="home-button-container"></div>
        <section>
          <h1>Music</h1>
        </section>
      </div>
    </>
  );
};

export default MusicPage;
