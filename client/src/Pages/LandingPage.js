import React from "react";
import NTWlogo from "../Components/NTWlogo";
import LargeImage from "../Components/LargeImage";
import "./LandingPage.css";

function LandingPage() {
  return (
    //React.Fragment shorcut
    <>
      <header className="header-banner"></header>
      <NTWlogo />
      <LargeImage />
      <footer id="footer-banner"></footer>
    </>
  );
}

export default LandingPage;
