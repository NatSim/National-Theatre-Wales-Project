import React from "react";
import { Link } from "react-router-dom";
import mainBeeLogo from "../../images/logos/MainBeeLogo/GTTB_Logo.jpg";
import "./Header.css";

const Header = (props) => {
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
            <li className="nav-link-control"> Home </li>
          </Link>
          <Link to="/show" className="nav-child">
            <li className="nav-link-control"> About </li>
          </Link>
          <Link to="/about/1" className="nav-child">
            <li className="nav-link-control"> TEAM </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
