import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

function WelcomeTest() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const sentences = [
    i18n.t("welcomeComponent"),
    i18n.t("welcomeStory"),
    i18n.t("welcomeQuestion"),
  ];

  // <span id="1">{t("welcomeComponent")}</span>,
  //   <span id="2">{t("welcomeStory")}</span>,
  //   <span id="3">{t("welcomeQuestion")}</span>,

  const [intro, setIntro] = useState(sentences[0]);
  //   console.log(sentences.indexOf(intro));
  console.log(sentences);

  useEffect(() => {
    //ToDo: Change name every 3 seconds here

    const timer = setInterval(() => {
      //Change name logic goes here

      setIntro((previousIntro) => {
        let newIndex = sentences.indexOf(intro) + 1;
        console.log(newIndex);
        if (newIndex === sentences.length) {
          newIndex = 0;
        }
        console.log(newIndex);
        const newIntro = sentences[newIndex];
        return newIntro;
      });
    }, 3000);
    //Clearing the timer when component unmounts
    return () => {
      clearInterval(timer);
    };
  }); // [] - means, it runs only once after mounting the component

  return (
    <>
      <div>
        <h1>{intro}</h1>
      </div>
    </>
  );
}

export default WelcomeTest;
