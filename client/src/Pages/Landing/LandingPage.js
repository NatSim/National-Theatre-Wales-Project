import React from "react";
import NTWlogo from "../../components/PageContent/NTWLogo/NTWlogo";
import LargeImage from "../../components/PageContent/LargeImages/LargeImage";
import "./LandingPage.css";
import SideNav from "../../components/Nav/SideNav";

function LandingPage() {
  return (
    //React.Fragment shorcut
    <>
      <div className="sidenav-container">
        <SideNav />
      </div>
      <div className="parent-flex-container">
        <NTWlogo className="ntw-logo-control" />

        <LargeImage className="main-bee-control" />
      </div>
    </>
  );
}

export default LandingPage;
