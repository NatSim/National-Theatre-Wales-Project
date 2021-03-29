import React from "react";
import { Link } from "react-router-dom";
import * as ImIcons from "react-icons/im";
import "./Footer.css";
import Counterpoints from "../../../images/logos/Counterpoints/Counterpoints.jpg";
import PHFLogo from "../../../images/logos/PaulHamlyn/PaulHamlynFoundation.jpg";
import ACWColourLandscape from "../../../images/logos/ACW/ACWcolour.jpg";

const Footer = () => {
  //Footer href Links
  const ntwFacebookPage = "https://www.facebook.com/nationaltheatrewales/";
  const ntwInstagramPage = "https://www.instagram.com/nationaltheatrewales/";
  const ntwTwitterPage = "https://twitter.com/ntwtweets";
  const ntwYouTubePage =
    "https://www.youtube.com/channel/UC54_0F_URQ5nvePaZRldKVg";

  return (
    <>
      <div className="home-footer">
        <ul className="socials-control">
          <li>
            <a
              href={ntwFacebookPage}
              target="_blank"
              rel="noreferrer"
              className="social-media-control"
            >
              <ImIcons.ImFacebook2 />
            </a>

            <a
              href={ntwInstagramPage}
              target="_blank"
              rel="noreferrer"
              className="social-media-control"
            >
              <ImIcons.ImInstagram />
            </a>
            <a
              href={ntwTwitterPage}
              target="_blank"
              rel="noreferrer"
              className="social-media-control"
            >
              <ImIcons.ImTwitter />
            </a>
            <a
              href={ntwYouTubePage}
              target="_blank"
              rel="noreferrer"
              className="social-media-control"
            >
              <ImIcons.ImYoutube />
            </a>
          </li>
        </ul>
        <ul className="footer-ul-control">
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
            <Link to={"/accessibility"} className="Link-control">
              Accessibility
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
              className="acw-logo"
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
          2021 Go Tell The Bees Copyright © National Theatre Wales.Registered
          Company No. 6693227 Charity Registration No. 1127952. <br />
          Website developed by{" "}
          <a
            href="https://www.linkedin.com/in/natasha-simone-14310364/"
            target="_blank"
            rel="noreferrer"
          >
            Natasha Simone.
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
