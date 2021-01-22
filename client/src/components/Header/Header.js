import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../../Components/Nav/SideNav";
import * as CgIcons from "react-icons/cg";
import "./Header.css";

const Header = () => {
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    // Get the header
    var header = document.getElementById("nav-header");

    // Get the offset position of the navbar
    if (header) {
      var sticky = header.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  };

  return (
    <>
      <div className="header" id="nav-header">
        <ul className="nav-links">
          <li>
            <SideNav />
          </li>
          <Link to="/home" className="nav-child">
            <li> Home </li>
          </Link>
          <Link to="/about" className="nav-child">
            <li> About </li>
          </Link>

          <Link to="/profile" className="nav-child">
            <li>
              <CgIcons.CgProfile className="profile-svg" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
