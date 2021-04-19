import React from "react";
import { useTranslation } from "react-i18next";
import "../../components/Buttons/MainButton.css";

/*Button use in WELCOME*/
const NextButton = ({ onClickHandler, welcomeStep }) => {
  const { t } = useTranslation();

  return (
    <>
      <button
        onClick={() => onClickHandler(welcomeStep + 1)}
        className="button"
      >
        {t("welcomeButton")}
      </button>
    </>
  );
};

export default NextButton;
