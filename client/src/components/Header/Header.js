import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import mainBeeLogo from "../../images/logos/MainBeeLogo/GTTB_Logo.jpg";
import "./Header.css";

const Header = (props) => {
  const { t } = useTranslation();

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
          <Link to="/explore" className="nav-child">
            <li className="nav-link-control"> {t("headerContent.2")} </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
