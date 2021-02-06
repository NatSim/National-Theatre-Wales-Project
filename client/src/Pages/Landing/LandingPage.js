import React from "react";
import NTWlogo from "../../components/PageContent/NTWLogo/NTWlogo";
import LargeImage from "../../components/PageContent/LargeImages/LargeImage";
import "./LandingPage.css";

function LandingPage() {
  return (
    //React.Fragment shorcut
    <>
      {/* <header className="header-banner"></header> */}
      <NTWlogo />
      <LargeImage />
      {/* <footer id="footer-banner"></footer> */}
    </>
  );
}

export default LandingPage;
