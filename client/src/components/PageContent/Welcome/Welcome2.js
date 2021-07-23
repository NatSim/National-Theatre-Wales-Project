import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Welcome2.css";

function WelcomeTest() {
  const { i18n } = useTranslation();

  const sentences = [
    i18n.t("welcomeComponent"),
    i18n.t("welcomeStory"),
    i18n.t("welcomeQuestion"),
  ];

  const [intro, setIntro] = useState(sentences[0]);

  useEffect(() => {
    //ToDo: Change name every 3 seconds here

    const timer = setInterval(() => {
      //Change name logic goes here

      setIntro((previousIntro) => {
        let newIndex = sentences.indexOf(intro) + 1;

        if (newIndex === sentences.length) {
          newIndex = 0;
        }

        const newIntro = sentences[newIndex];
        return newIntro;
      });
    }, 5000);
    //Clearing the timer when component unmounts
    return () => {
      clearInterval(timer);
    };
  }); // [] - means, it runs only once after mounting the component

  return (
    <>
      <div className="welcome-text-control">
        <h1 className="welcome-child-text-control">{intro}</h1>
      </div>
    </>
  );
}

export default WelcomeTest;
