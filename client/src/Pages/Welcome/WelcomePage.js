import React, { useState } from "react";
import { welcomeText } from "../../Models/welcomeText";
import Welcome from "../../components/PageContent/Welcome/Welcome";
import "../App.css";

//App Context Steps-Component, only BrandNew users will see on first visit
//Set state 0,1,2
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
  console.log(Welcome);

  return (
    <div>
      <Welcome
        welcomeStep={welcomeStep}
        onClickHandler={onClickHandler}
        title={title}
        mainText={mainText}
        imageUrl={imageUrl}
      />
    </div>
  );
}

export default WelcomePage;
