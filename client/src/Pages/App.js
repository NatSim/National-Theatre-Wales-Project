import React, { useState } from "react";
import NTWlogo from "../Components/NTWlogo";
import LargeImage from "../Components/LargeImage";
import Welcome from "../Components/Welcome";
import SimpleActVideo from "./SimpleActsPage";
// import { Router, Route, Switch } from "react-router";
import WelcomeBee from "../Components/BeeStamp";
import BeeStamp from "../images/whole-beeimage.png";
// import "../Components/Welcome.css";

// // SERVICES
// import userService from "../services/userService";

/**
 * Landing Page Content
 * welcomeText Array = Each key:pair object is user Step/State change
 */
const welcomeText = [
  {
    title: "Welcome to Go Tell The Bees",
    mainText:
      "Go Tell the Bees, asks each one of us to perform seven Simple Acts in our daily lives.",
  },
  {
    title: "The story goes that, whenever we fail to do so...",
    mainText:
      "...the bees will leave their hives and disappear from our area… .",
  },
  {
    title: "So what will you tell the bees?!",
    mainText: "",
  },
  {
    imageUrl: BeeStamp,
  },
];

//Setting state 0,1,2
function App() {
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
    <div>
      <NTWlogo />
      <LargeImage />
      <Welcome
        welcomeStep={welcomeStep}
        onClickHandler={onClickHandler}
        title={title}
        // specialChars={specialChars}
        mainText={mainText}
        imageUrl={imageUrl}
      />
      <WelcomeBee /*{temp to set dimensions}*/ />
      {/* <Story /> */}
      <SimpleActVideo videoId="qxB3-sw2HAQ" />
    </div>
  );
}

export default App;
