import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HomePage.css";
import BeeStamp from "../../images/Simple7/whole-beeimage.png";
import SideNav from "../../components/Nav/SideNav";

/**Homepage with Nav buttons as routes to sub pages
 * */

const NavButton = (props) => {
  return (
    /*Reusable Nav button component*/
    <Link to={props.link}>
      <Button id={props.buttonColor} className="default-button">
        {props.children}
      </Button>
    </Link>
  );
};

const HomePage = (props) => {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const setFooterColor = () => {
    if ("background-bee-image dark-green") {
      document
        .getElementsByClassName("home-footer") //in App.js
        .classList.add("dark-green");
    }
  };

  return (
    <>
      <div className="background-bee-image dark-green">
        <nav className="sidenav-container">
          <SideNav />
          {/* Translation Button START HERE */}
          <div className="translate-button-control">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
            {/* Translation Button END HERE */}{" "}
          </div>
        </nav>
        <main>
          <nav className="nav-container">
            <h2 className="subtitle5">{i18n.t("homeSubtitleDiscover")}</h2>
            <ul className="middle-nav-list">
              <li className="nav-button-list">
                <Link to="/show">
                  <img
                    id="about-button"
                    className="default-button"
                    src={BeeStamp}
                    alt="whole bee "
                  />
                </Link>
              </li>
              <li className="nav-button-list">
                <NavButton link={"/connect"} buttonColor={"green-button"}>
                  {i18n.t("homeNavContent.0")}
                </NavButton>
              </li>
              <li className="nav-button-list">
                <NavButton link={"/music"} buttonColor={"pink-button"}>
                  {i18n.t("homeNavContent.1")}
                </NavButton>
              </li>

              <li className="nav-button-list">
                <NavButton link={"/simpleacts"} buttonColor={"simple-button"}>
                  {i18n.t("homeNavContent.2")}
                </NavButton>
              </li>
              <li className="nav-button-list">
                <NavButton link={"/map"} buttonColor={"blue-button"}>
                  {i18n.t("homeNavContent.3")}
                </NavButton>
              </li>
            </ul>
          </nav>{" "}
        </main>
      </div>
    </>
  );
};

export default HomePage;
