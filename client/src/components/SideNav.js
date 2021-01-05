import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <div className="nav-bar">
        <Link to="/home" className="menu-bars"></Link>
        <FaIcons.FaBars />
      </div>
    </>
  );
}

export default SideNav;
