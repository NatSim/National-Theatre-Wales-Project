import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./HomePage.css";
import BeeStamp from "../../images/simple7/whole-beeimage.png";
import Features from "../../components/PageContent/Features/Features";
import NTWLogo from "../../images/logos/NTWLogo/NTW_Logo.png";
import Party from "../../images/NTW/NTWHaverHub.jpg";
import Tide from "../../images/TEAM/Tide-Whisperer-TEAM-Social-1-1.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Header from "../../components/Header/Header";
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

  return (
    <>
      <Header />
      <SideNav />
      <section className="homepage">
        <div className="background-outer"></div>
        <main>
          <div className="translate-button">
            <div className="translate-button-control">
              <button onClick={() => changeLanguage("en")}>En</button>
              <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
            </div>{" "}
            {/* Translation Button END HERE */}
            <nav className="nav-container">
              <h2 className="subtitle1">{i18n.t("homeSubtitleDiscover")}</h2>
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
          </div>
        </main>
      </section>
      <h2 className="subtitle2">{i18n.t("homeSubtitleExplore")}</h2>
      <Container className="card-deck">
        <Row>
          <Col sm>
            <Features
              image={NTWLogo}
              title={i18n.t("featureCard1.0")}
              text={i18n.t("featureCard1.1")}
              button={i18n.t("featureCard1.2")}
              links={"/about/2"}
              id={"2"}
            />
          </Col>
          <Col sm>
            <Features
              image={Tide}
              title={i18n.t("featureCard2.0")}
              text={i18n.t("featureCard2.1")}
              button={i18n.t("featureCard1.2")}
              links={"/about/1"}
              id={"1"}
            />
          </Col>
          <Col sm>
            <Features
              image={Party}
              title={i18n.t("featureCard3.0")}
              text={i18n.t("featureCard3.1")}
              button={i18n.t("featureCard1.2")}
              links={"/contact"}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
