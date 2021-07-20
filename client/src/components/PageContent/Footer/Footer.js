import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const counterpointArtsHref = "https://counterpointsarts.org.uk";
  const artsCouncilHref = "https://arts.wales/";
  const paulHamlynHref = "https://www.phf.org.uk/";

  const { t } = useTranslation();

  return (
    <>
      <div className="home-footer">
        <ul className="socials-control">
          <li className="socials-link-control">
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
              {t("footerContent.0")}
            </Link>
          </li>
          <li>
            <Link to={"/terms"} className="Link-control">
              {t("footerContent.1")}
            </Link>
          </li>
          <li>
            <Link to={"/accessibility"} className="Link-control">
              {t("footerContent.2")}
            </Link>
          </li>
        </ul>
        <ul className="footer-ul-control">
          <li>
            <a
              href={counterpointArtsHref}
              target="_blank"
              rel="noreferrer"
              className="Counterpoint Arts"
            >
              <img
                className="charity-logo"
                src={Counterpoints}
                alt="Counterpoint Arts"
              />
            </a>
          </li>
          <li>
            <a
              href={artsCouncilHref}
              target="_blank"
              rel="noreferrer"
              className="Arts Council Wales"
            >
              <img
                className="acw-logo"
                src={ACWColourLandscape}
                alt="Arts Council Wales"
              />
            </a>
          </li>
          <li>
            <a
              href={paulHamlynHref}
              target="_blank"
              rel="noreferrer"
              className="Paul Hamlyn Foundation"
            >
              <img
                className="charity-logo"
                src={PHFLogo}
                alt="Paul Hamlyn Foundation"
              />
            </a>
          </li>
        </ul>
        <p>
          {t("footerContent.3")}
          <a
            href="https://natsim-portfolio.herokuapp.com/"
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
