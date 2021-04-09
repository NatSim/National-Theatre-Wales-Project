import React, { useState } from "react";
import Welcome from "../../components/PageContent/Welcome/Welcome";
import { Trans, useTranslation } from "react-i18next";
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
  const [imageUrl, setImageUrl] = useState(welcomeText[3].imageUrl);
  const [welcomeStep, setWelcomeStep] = useState(0); //starting point

  console.log(title);

  /*Button onclick function arrayElement*/
  const onClickHandler = (arrayElement) => {
    setWelcomeStep(arrayElement);
    setTitle(welcomeText[arrayElement].title);
    setMainText(welcomeText[arrayElement].mainText);
    setImageUrl(welcomeText[arrayElement].imageUrl);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Header />
      {/* WELCOME container START HERE */}
      {/* <section className="welcome-container"> */}

      <Welcome
        welcomeStep={welcomeStep}
        onClickHandler={onClickHandler}
        title={title}
        mainText={mainText}
        imageUrl={imageUrl}
      />

      {/* </section> */}
      {/* Welcome container END HERE */}

      {/* CARD container START HERE */}
      <section className="card-container">
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
      </section>
      {/* CARD container END HERE */}
    </>
  );
}

export default LandingPage;
