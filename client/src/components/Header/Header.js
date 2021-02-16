import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <div className="header" id="nav-header">
        <ul className="nav-links">
          <Link to="/home" className="nav-child">
            <li> Home </li>
          </Link>
          <Link to="/about" className="nav-child">
            <li> About </li>
          </Link>
          <Link to="/show" className="nav-child">
            <li> Show </li>
          </Link>
          <Link to={props.Link} className="nav-child">
            <li>{props.Icon}</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
