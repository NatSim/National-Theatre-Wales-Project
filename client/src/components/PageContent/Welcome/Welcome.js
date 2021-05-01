import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./Welcome.css";
import NextButton from "../../Buttons/MainButton";
import { useHistory } from "react-router";

/**
 WELCOME MESSAGE
 Appears in Landing page
 **/

const Welcome = ({ mainText, onClickHandler, welcomeStep, id_1 }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const history = useHistory();
  //On Button click redirects user to home page

  const navigateToHome = () => {
    history.push("/home");
  };

  useEffect(() => {
    if (welcomeStep === 3) {
      navigateToHome();
    }
  });
  //Step 1
  const newTitle = () => (
    <>
      <span className="">{t("welcomeComponent.0")}</span>
      <br />
      <span className="yellow">
        <b>{t("welcomeComponent.1")}</b>
      </span>
    </>
  );

  const specialChars = () => (
    <>
      <section className="set-all-container-size">
        <div className="special-chars-control">
          <span className="">
            <b>{t("welcomeComponent.1")} </b>
            <br />
            <b>{t("welcomeComponent.2")}</b>
            <br />
            <b>{t("welcomeComponent.3")}</b>
          </span>
          <span className="blue">
            <b> {t("welcomeComponent.4")}</b>
          </span>
          <br />
          <span className="">
            <b> {t("welcomeComponent.5")}</b>
          </span>
        </div>
      </section>
    </>
  );

  const questionChars = () => (
    <>
      <span className="yellow">{t("welcomeComponent.6")}</span>{" "}
    </>
  );

  return (
    <>
      <section className="text-image-control">
        <div>
          <h1 className="welcome-title">
            {welcomeStep === 0 ? (
              newTitle()
            ) : welcomeStep === 2 ? (
              questionChars()
            ) : welcomeStep !== 3 ? (
              <Trans i18nKey="welcomeStory.0"></Trans>
            ) : (
              ""
            )}
          </h1>

          <h2 className={"main-text"}>
            {welcomeStep === 0 ? (
              specialChars()
            ) : welcomeStep === 1 || id_1 ? (
              <Trans i18nKey="welcomeMainText.0"></Trans>
            ) : (
              ""
            )}
          </h2>
        </div>
      </section>
      <div
        className={
          welcomeStep === 0 || welcomeStep === 3
            ? "welcome-next-button-control0"
            : "welcome-next-button-control1" && !mainText
            ? "welcome-next-button-control1"
            : "welcome-next-button-control2"
        }
      ></div>
      <NextButton onClickHandler={onClickHandler} welcomeStep={welcomeStep} />
    </>
  );
};

export default Welcome;
