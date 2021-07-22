import React from "react";
import { useTranslation } from "react-i18next";
import "./LandingPage.css";
import Header from "../../components/Header/Header";
import SideNav from "../../components/Nav/SideNav";
import Welcome2 from "../../components/PageContent/Welcome/Welcome2";

function LandingPage(props) {
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const setBeeBackground = () => {
    if (LandingPage) {
      //condition needs to be checked before landing page render
      document.body.classList.add("background-bee-image");

      console.log("SHOW BEE BACKGROUND!");
    }
  };

  setBeeBackground();

  return (
    <>
      <div id="content">
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
              <Welcome2 />
            </section>
          </main>
          {/* Welcome container END HERE */}
          {/* Translation Button END HERE */}
        </div>

        {/* CARD container START HERE */}

        {/* <section className="card-container">
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
      </section> */}

        {/* CARD container END HERE */}
      </div>
    </>
  );
}

export default LandingPage;
