import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";

const ConnectPage = (props) => {
  const NavButton = (props) => {
    return (
      //Reusable Nav button component
      <Link to={props.link}>
        <Button id={props.buttonColor} className="default-button">
          {props.children}
        </Button>
      </Link>
    );
  };
  return (
    <>
      <SideNav />
      <Header />
      <div className="home-container-video4">
        <h2 className="subtitle1">Stories</h2>
        <section className="audio-container-parent">
          <ul className="story-container">
            <li>
              <NavButton link={"/storiesA"} buttonColor={"green-button"}>
                Over 16s
              </NavButton>
            </li>
            <li>
              <NavButton link={"/storiesC"} buttonColor={"pink-button"}>
                Under 16s
              </NavButton>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ConnectPage;
