import React from "react";
import NTWlogo from "../../Components/PageContent/NTWLogo/NTWlogo";
import LargeImage from "../../Components/PageContent/LargeImages/LargeImage";
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
