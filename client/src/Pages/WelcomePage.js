import React, { useState } from "react";
import { welcomeText } from "../Models/welcomeText";
import Welcome from "../Components/Welcome";

function WelcomePage() {
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

  return (
    <Welcome
      welcomeStep={welcomeStep}
      onClickHandler={onClickHandler}
      title={title}
      mainText={mainText}
      imageUrl={imageUrl}
    />
  );
}

export default WelcomePage;
