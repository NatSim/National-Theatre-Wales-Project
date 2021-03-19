import React, { useState } from "react";
import Welcome from "../../components/PageContent/Welcome/Welcome";
import { welcomeText } from "../../Models/welcomeText";
import NTWlogo from "../../components/PageContent/NTWLogo/NTWlogo";
import LargeImage from "../../components/PageContent/LargeImages/LargeImage";
import "./LandingPage.css";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";
import Features from "../../components/PageContent/Features/Features";
import NTWLogo from "../../images/logos/NTWLogo/NTW_Logo.png";
import Party from "../../images/NTWHaverHub.jpg";
import Tide from "../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function LandingPage() {
  const [title, setTitle] = useState(welcomeText[0].title);
  const [mainText, setMainText] = useState(welcomeText[0].mainText);
  const [imageUrl, setImageUrl] = useState(welcomeText[3].imageUrl);
  const [welcomeStep, setWelcomeStep] = useState(0); //starting point
  console.log({ imageUrl });
  //Button onclick function arrayElement
  const onClickHandler = (arrayElement) => {
    setTitle(welcomeText[arrayElement].title);
    setMainText(welcomeText[arrayElement].mainText);
    setImageUrl(welcomeText[arrayElement].imageUrl);
    setWelcomeStep(arrayElement);
  };
  console.log(Welcome);
  //Card Title Text
  const titleTeam = "Join TEAM";
  const titleNTW = "National Theatre Wales";
  const contactUs = "Get in Touch";

  //Card Button Text
  const clickHere = "Click Here";

  //Card placeholder Text
  const placeholderText =
    "Some quick example text to build on the card title and make up the bulk of the card's content.";

  return (
    //React.Fragment shorcut
    <>
      <Header />
      <div className="parent-flex-container">
        <div className="welcome-container">
          <Welcome
            welcomeStep={welcomeStep}
            onClickHandler={onClickHandler}
            title={title}
            mainText={mainText}
            imageUrl={imageUrl}
          />
        </div>
        <h2 className="subtitle2">Explore</h2>
        <Container className="card-deck">
          <Row>
            <Col sm>
              <Features
                image={NTWLogo}
                title={titleNTW}
                text={placeholderText}
                button={clickHere}
                links={"/about/2"}
                id={"2"}
              />
            </Col>
            <Col sm>
              <Features
                image={Tide}
                title={titleTeam}
                text={placeholderText}
                button={clickHere}
                links={"/about/1"}
                id={"1"}
              />
            </Col>
            <Col sm>
              <Features
                image={Party}
                title={contactUs}
                text={placeholderText}
                button={clickHere}
                links={"/contact"}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LandingPage;
