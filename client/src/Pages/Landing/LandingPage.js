import React from "react";
import NTWlogo from "../../components/PageContent/NTWLogo/NTWlogo";
import LargeImage from "../../components/PageContent/LargeImages/LargeImage";
import LargeImage2 from "../../components/PageContent/LargeImages/LargeImage2";
import "./LandingPage.css";

function LandingPage() {
  return (
    //React.Fragment shorcut
    <>
      <div className="parent-flex-container">
        <NTWlogo className="ntw-logo-control" />
        <LargeImage className="large-bee-control" />
        <LargeImage2 />
      </div>
    </>
  );
}

export default LandingPage;
