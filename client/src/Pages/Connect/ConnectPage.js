import React from "react";
import { useTranslation } from "react-i18next";
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

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <SideNav />
      <Header />
      <main className="home-container-video5">
        {/* Translation Button START HERE */}
        <div className="translate-button">
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("welsh")}>Welsh</button>
          {/* Translation Button END HERE */}
          <hr />
        </div>
        <h2 id="white-font" className="subtitle2">
          {t("storiesContent.0")}
        </h2>
        <section className="audio-container-parent">
          <ul className="story-container">
            <li className="connect-button-control">
              <NavButton
                link={"/stories/1"}
                buttonColor={"green-button"}
                id={"1"}
              >
                {t("storiesContent.1")}
              </NavButton>
            </li>
            <li className="connect-button-control">
              <NavButton
                link={"/stories/2"}
                buttonColor={"pink-button"}
                id={"2"}
              >
                {t("storiesContent.2")}
              </NavButton>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default ConnectPage;
