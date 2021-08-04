import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SideNav from "../../components/Nav/SideNav";
import "./Connect.css";

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
      <div className="background-bee-image dark-green">
        <nav className="sidenav-container">
          <SideNav />
          {/* Translation Button START HERE */}
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
            {/* Translation Button END HERE */}
          </div>
        </nav>
        <main>
          <section className="audio-container-parent">
            <ul className="story-container">
              <li>
                {" "}
                <h2 className="subtitle5">{t("storiesContent.0")}</h2>
              </li>
              <li className="connect-button-control">
                <NavButton
                  link={"/stories/2"}
                  buttonColor={"pink-button"}
                  id={"2"}
                >
                  {t("storiesContent.2")}
                </NavButton>{" "}
                {/*children story intro info STARTS HERE*/}{" "}
                <div className="story-blurbs">
                  <p>
                    <em>{t("storiesContent.7")}</em>
                  </p>
                </div>{" "}
                {/*children story intro info ENDS HERE*/}
              </li>{" "}
              <li className="connect-button-control">
                <NavButton
                  link={"/stories/1"}
                  buttonColor={"simple-button"}
                  id={"1"}
                >
                  {t("storiesContent.1")}
                </NavButton>{" "}
                {/*children story intro info STARTS HERE*/}
                <div className="story-blurbs">
                  <p>
                    {t("storiesContent.4")}
                    <em>{t("storiesContent.5")}</em>
                  </p>
                </div>
                {/*children story intro info END HERE*/}
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default ConnectPage;
