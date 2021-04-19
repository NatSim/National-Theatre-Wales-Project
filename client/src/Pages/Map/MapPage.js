import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Maps from "../../components/PageContent/Maps/Maps";
import SideNav from "../../components/Nav/SideNav";

/***Static images ***/
const MapPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <SideNav />
      <Header />
      {/* Translation Button START HERE */}
      <div className="translate-button">
        <button onClick={() => changeLanguage("en")}>En</button>
        <button onClick={() => changeLanguage("welsh")}>Welsh</button>
        {/* Translation Button END HERE */}
        <hr />
      </div>
      <h3 className="subtitle1">{t("mapContent.0")}</h3>
      <div>
        <Maps />
      </div>
    </div>
  );
};
export default MapPage;
