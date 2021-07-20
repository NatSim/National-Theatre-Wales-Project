import React, { useState, useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { MdSettingsBackupRestore } from "react-icons/md";

function WelcomeTest() {
  const { t } = useTranslation();

  const sentences = [
    "Welcome to GTTBs...",
    "The story goes that...",
    "So what will you...",
  ];

  const [intro, setIntro] = useState(sentences[0]);

  useEffect(() => {
    //ToDo: Change name every 3 seconds here

    const timer = setInterval(() => {
      //Change name logic goes here

      setIntro((previousIntro) => {
        const newIndex = sentences.indexOf(intro) + 1;
        if (newIndex > sentences.length) {
          newIndex = 0;
        }
        const newIntro = sentences[newIndex];
        return newIntro;
      });
    }, 3000);
    //Clearing the timer when component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [intro]); // [] - means, it runs only once after mounting the component

  return (
    <div>
      <h1>{intro}</h1>
    </div>
  );
}

export default WelcomeTest;
