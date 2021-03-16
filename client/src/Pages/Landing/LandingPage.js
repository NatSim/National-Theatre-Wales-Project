import React, { useState } from "react";
import Welcome from "../../components/PageContent/Welcome/Welcome";
import { welcomeText } from "../../Models/welcomeText";
import NTWlogo from "../../components/PageContent/NTWLogo/NTWlogo";
import LargeImage from "../../components/PageContent/LargeImages/LargeImage";
import "./LandingPage.css";
import SideNav from "../../components/Nav/SideNav";

function LandingPage() {
  const [title, setTitle] = useState(welcomeText[0].title);
  const [mainText, setMainText] = useState(welcomeText[0].mainText);
  const [imageUrl, setImageUrl] = useState(welcomeText[3].imageUrl);
  const [welcomeStep, setWelcomeStep] = useState(0); //starting point
  console.log({ imageUrl });
  //Button onclick function arrayElement
  const onClickHandler = (arrayElement) => {
    setTitle(welcomeText[arrayElement].title);
    setMainText(welcomeText[arrayElement].mainText);
    setImageUrl(welcomeText[arrayElement].imageUrl);
    setWelcomeStep(arrayElement);
  };
  console.log(Welcome);
  return (
    //React.Fragment shorcut
    <>
      <div className="sidenav-container">
        <SideNav />
      </div>
      <div className="parent-flex-container">
        <div>
          <NTWlogo className="ntw-logo-control" />
        </div>
        <div>
          <LargeImage className="main-bee-control" />
        </div>
        <div>
          <Welcome
            welcomeStep={welcomeStep}
            onClickHandler={onClickHandler}
            title={title}
            mainText={mainText}
            imageUrl={imageUrl}
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
