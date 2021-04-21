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

  const { i18n } = useTranslation();

  return (
    <>
      <Header />
      {/* WELCOME container START HERE */}
      <section>
        <Welcome
          welcomeStep={welcomeStep}
          onClickHandler={onClickHandler}
          title={title}
          mainText={mainText}
        />
      </section>
      {/* Welcome container END HERE */}

      {/* CARD container START HERE */}
      <section className="card-container">
        <div>
          <h2 className="">{i18n.t("homeSubtitleExplore")}</h2>
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
