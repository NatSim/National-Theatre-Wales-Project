import React from "react";
import { useTranslation } from "react-i18next";

function ShowCopy() {
  const { t } = useTranslation();

  return (
    <div className="text-border-control">
      <p className="show-copy-text-control">{t("showCopy.0")}</p>
      <br />
      <p className="show-copy-text-control">{t("showCopy.1")}</p>
    </div>
  );
}

export default ShowCopy;
