import React from "react";
import { useTranslation } from "react-i18next";
import SideNav from "../../components/Nav/SideNav";
import Features from "../../components/PageContent/Features/Features";
import NTWLogo from "../../images/logos/NTWLogo/NTW_Logo.png";
import Party from "../../images/NTW/NTWHaverHub.jpg";
import Tide from "../../images/TEAM/Festival.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./ExplorePage.css";

function ExplorePage() {
  /**
   * Page Hosts the About pages & contact
   * */

  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="background-explore-image">
        <nav className="sidenav-container">
          <SideNav />
          {/* Translation Button START HERE */}
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
            {/* Translation Button END HERE */}{" "}
          </div>
        </nav>
        {/* CARD container START HERE */}
        <div className="explore-title-control">
          <h2 className="explore-page">{i18n.t("homeSubtitleExplore")}</h2>
        </div>
        <section className="card-container">
          <Container className="card-deck">
            <Row>
              <Col lg>
                <Features
                  image={NTWLogo}
                  title={i18n.t("featureCard1.0")}
                  text={i18n.t("featureCard1.1")}
                  button={i18n.t("featureCard1.2")}
                  links={"/about/2"}
                  id="button1-contol"
                />
              </Col>
              <Col lg>
                <Features
                  image={Tide}
                  title={i18n.t("featureCard2.0")}
                  text={i18n.t("featureCard2.1")}
                  button={i18n.t("featureCard1.2")}
                  links={"/about/1"}
                  id="button1-contol"
                />
              </Col>
              <Col lg>
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
      </div>
    </>
  );
}

export default ExplorePage;
