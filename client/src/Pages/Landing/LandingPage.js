import React, { useState } from "react";
import Welcome from "../../components/PageContent/Welcome/Welcome";
import { useTranslation } from "react-i18next";
import { welcomeText } from "../../Models/welcomeText";
import "./LandingPage.css";
import Header from "../../components/Header/Header";
import Features from "../../components/PageContent/Features/Features";
import NTWLogo from "../../images/logos/NTWLogo/NTW_Logo.png";
import Party from "../../images/NTW/NTWHaverHub.jpg";
import Tide from "../../images/TEAM/Tide-Whisperer-TEAM-Social-1-1.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SideNav from "../../components/Nav/SideNav";

function LandingPage() {
  const [title, setTitle] = useState(welcomeText[0].title);
  const [mainText, setMainText] = useState(welcomeText[0].mainText);
  const [welcomeStep, setWelcomeStep] = useState(0); //starting point

  //Welcome Button onclick function Array Element
  const onClickHandler = (arrayElement) => {
    setWelcomeStep(arrayElement);
    setTitle(welcomeText[arrayElement].title);
    setMainText(welcomeText[arrayElement].mainText);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header />
      <nav className="sidenav-container">
        <SideNav />
      </nav>
      {/* Translation Button START HERE */}
      <div className="translate-button2">
        <div className="translate-button-control">
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
          <hr />{" "}
        </div>

        {/* WELCOME container START HERE */}
        {/* <section> */}
        <main className="title-container">
          <section>
            <Welcome
              welcomeStep={welcomeStep}
              onClickHandler={onClickHandler}
              title={title}
              mainText={mainText}
            />
          </section>
        </main>
        {/* Welcome container END HERE */}
        {/* Translation Button END HERE */}
      </div>

      {/* CARD container START HERE */}

      <section className="card-container">
        <div className="explore-title-control">
          <h2>{i18n.t("homeSubtitleExplore")}</h2>
        </div>
        <Container className="card-deck">
          <Row>
            <Col sm>
              <Features
                image={NTWLogo}
                title={i18n.t("featureCard1.0")}
                text={i18n.t("featureCard1.1")}
                button={i18n.t("featureCard1.2")}
                links={"/about/2"}
                id="button1-contol"
              />
            </Col>
            <Col sm>
              <Features
                image={Tide}
                title={i18n.t("featureCard2.0")}
                text={i18n.t("featureCard2.1")}
                button={i18n.t("featureCard1.2")}
                links={"/about/1"}
                id="button1-contol"
              />
            </Col>
            <Col sm>
              <Features
                image={Party}
                title={i18n.t("featureCard3.0")}
                text={i18n.t("featureCard3.1")}
                button={i18n.t("featureCard1.2")}
                links={"/contact"}
                id="button1-contol"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* CARD container END HERE */}
    </>
  );
}

export default LandingPage;
