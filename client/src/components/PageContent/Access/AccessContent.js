import React from "react";
import { useTranslation } from "react-i18next";
import "./AccessContent.css";

const AccessContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="access-content-control">
        {t("accessibilityContent.1")}
        <br />
        <a href="rhianlewis@nationaltheatrewales.org">
          rhianlewis@nationaltheatrewales.org
        </a>
        {t("accessibilityContent.2")}
        <a href="info@nationaltheatrewales.org">
          info@nationaltheatrewales.org
        </a>
      </p>
    </>
  );
};
export default AccessContent;
