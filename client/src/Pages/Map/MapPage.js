import React from "react";
import { useTranslation } from "react-i18next";
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
      <main>
        <div className="background-bee-image green">
          <nav className="sidenav-container">
            <SideNav />
          </nav>
          {/* Translation Button START HERE */}
          <div className="translate-button">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
            {/* Translation Button END HERE */}
            <hr />
          </div>
          <h3 className="subtitle1">{t("mapContent.0")}</h3>

          <div>
            <Maps />
          </div>
        </div>
      </main>
    </div>
  );
};
export default MapPage;
