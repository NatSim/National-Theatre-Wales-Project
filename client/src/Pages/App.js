import React, { useState, useEffect } from "react";
import NTWlogo from "../Components/NTWlogo";
import LargeImage from "../Components/LargeImage";
import Welcome from "./Welcome";
import Story from "./LandingPage3";
import Start from "./LandingPage4";
import SimpleActVideo from "./SimpleActsPage";
import { Router, Route, Switch } from "react-router";

// SERVICES
import userService from "../services/userService";

const welcomeText = [
  {
    title: "Welcome to Go Tell The Bees",
    mainText:
      "Go Tell the Bees, asks each one of us to perform seven Simple Acts in our daily lives.",
  },
  {
    title: "Thanks so much Tanya!!",
    mainText: "Go hghfh .",
  },
  {
    title: "Thjgjgj!",
    mainText: "hhgjhjfjj.",
  },
];

function App() {
  const [title, setTitle] = useState(welcomeText[0].title);
  const [mainText, setMainText] = useState(welcomeText[0].mainText);
  const [welcomeStep, setWelcomeStep] = useState(0);
  const onClickHandler = (arrayElement) => {
    setTitle(welcomeText[arrayElement].title);
    setMainText(welcomeText[arrayElement].mainText);
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
        mainText={mainText}
      />
      {/* <Story /> */}
      <SimpleActVideo videoId="qxB3-sw2HAQ" />
    </div>
  );
}

export default App;
