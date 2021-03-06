import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./HomePage.css";
import BeeStamp from "../../images/whole-beeimage.png";
import Features from "../../components/PageContent/Features/Features";
import NTWLogo from "../../images/logos/NTWLogo/NTW_Logo.png";
import Party from "../../images/NTWHaverHub.jpg";
import Tide from "../../images/Tide-Whisperer-TEAM-Social-1-1.jpg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Header from "../../components/Header/Header";
// import SideNav from "../../components/Nav/SideNav";
import * as GrIcons from "react-icons/gr";
import SideNav from "../../components/Nav/SideNav";

/**Homepage with Nav buttons as routes to other pages
 * */

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

//Card Title Text
const titleTeam = "Join TEAM";
const titleNTW = "National Theatre Wales";
const contactUs = "Get in Touch";

//Card Button Text
const clickHere = "Click Here";

//Card placeholder Text
const placeholderText =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";

function HomePage(props) {
  //Header Login/Reg icon/path
  const Item = "/login";
  const itemIcon = <GrIcons.GrLogin className="profile-svg" />;

  return (
    <>
      <Header Link={Item} Icon={itemIcon} />
      <SideNav />
      <div className="homepage">
        <div className="background-outer"></div>
        <main>
          <nav className="nav-container">
            <h2 className="subtitle1">Discover</h2>

            <ul className="middle-nav-list">
              <li>
                <Link to={"/show"}>
                  <img
                    id="about-button"
                    className="default-button"
                    src={BeeStamp}
                    alt="whole bee "
                  />
                </Link>
              </li>
              <li>
                <NavButton link={"/connect"} buttonColor={"green-button"}>
                  Connect
                </NavButton>
              </li>
              <li>
                <NavButton link={"/music"} buttonColor={"pink-button"}>
                  Listen
                </NavButton>
              </li>

              <li>
                <NavButton link={"/simpleacts"} buttonColor={"simple-button"}>
                  Act
                </NavButton>
              </li>
              <li>
                <NavButton link={"/map"} buttonColor={"blue-button"}>
                  Map
                </NavButton>
              </li>
            </ul>
          </nav>
        </main>
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
    </>
  );
}

export default HomePage;
