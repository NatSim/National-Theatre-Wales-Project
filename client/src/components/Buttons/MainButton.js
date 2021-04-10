import React from "react";
import { Trans, useTranslation } from "react-i18next";
import "../../components/Buttons/MainButton.css";

/*Button use in WELCOME*/
const NextButton = ({ onClickHandler, welcomeStep }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button
        onClick={() => onClickHandler(welcomeStep + 1)}
        className="button"
      >
        {t("welcomeButton")}
      </button>
    </div>
  );
};

export default NextButton;
