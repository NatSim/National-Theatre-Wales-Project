import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mainBeeLogo from "../../images/logos/MainBeeLogo/GTTB_Logo.jpg";
import "./Header.css";

const Header = (props) => {
  const { t } = useTranslation();
  const changeLanguage = (language) => {};
  return (
    <>
      <div className="header" id="nav-header">
        <ul className="nav-links">
          <li className="bee-logo-parent">
            <img
              className="bee-logo-control"
              src={mainBeeLogo}
              alt="bee-logo"
            />
          </li>
          <Link to="/home" className="nav-child">
            <li className="nav-link-control"> {t("headerContent.0")} </li>
          </Link>
          <Link to="/show" className="nav-child">
            <li className="nav-link-control"> {t("headerContent.1")} </li>
          </Link>
          <Link to="/about/1" className="nav-child">
            <li className="nav-link-control"> TEAM </li>
          </Link>
          {/* Translation Button START HERE */}

          {/* <div className="translate-button-control">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Cymraeg</button> */}
          {/* Translation Button END HERE */}
          {/* </div> */}
        </ul>
      </div>
    </>
  );
};

export default Header;
