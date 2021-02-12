import React from "react";
import { Link } from "react-router-dom";
import * as ImIcons from "react-icons/im";
import "./Footer.css";
import Counterpoints from "../../../images/logos/Counterpoints/Counterpoints.jpg";
import PHFLogo from "../../../images/logos/PaulHamlyn/PaulHamlynFoundation.jpg";
import ACWColourLandscape from "../../../images/logos/ACW/ACWcolour.jpg";
import ACWLandscapeBW from "../../../images/logos/ACW/ACWmono.jpg";
import ACWPotraitColour from "../../../images/logos/ACW/ACWPotraitColour.jpg";
import ACWPotraitBW from "../../../images/logos/ACW/ACWPotraitMono.jpg";

const Footer = () => {
  //Footer href Links
  const ntwFacebookPage = "https://www.facebook.com/nationaltheatrewales/";

  return (
    <>
      <footer className="home-footer">
        <ul className="footer-ul-control">
          <li>
            <a href={ntwFacebookPage} target="_blank" rel="noreferrer">
              <ImIcons.ImFacebook2 />
            </a>
          </li>
          <li>
            <Link to={"/contact"} className="Link-control">
              Contact Us
            </Link>
          </li>

          <li>
            <Link to={"/terms"} className="Link-control">
              Terms{`&`}Conditions
            </Link>
          </li>
          <li>
            <Link to={"/privacy"} className="Link-control">
              Privacy
            </Link>
          </li>
        </ul>
        <ul className="footer-ul-control">
          <li>
            <img
              className="charity-logo"
              src={Counterpoints}
              alt="Arts Council Wales logo"
            />
          </li>
          <li>
            <img
              className="charity-logo"
              src={ACWColourLandscape}
              alt="Arts Council Wales"
            />
          </li>
          <li>
            <img
              className="charity-logo"
              src={PHFLogo}
              alt="Paul Hamlyn Foundation"
            />
          </li>
        </ul>
        <p>
          2021 Go Tell The Bees Copyright © National Theatre Wales. Website
          developed by Natasha Simone. Registered Company No. 6693227 Charity
          Registration No. 1127952
        </p>
      </footer>
    </>
  );
};

export default Footer;
