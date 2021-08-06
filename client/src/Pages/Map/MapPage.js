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
            {/* Translation Button START HERE */}
            <div className="translate-button-control">
              <span onClick={() => changeLanguage("en")}>En/</span>
              <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
            </div>
            {/* Translation Button END HERE */}
          </nav>
          <h2 className="subtitle5">{t("mapContent.0")}</h2>

          <div>
            <Maps />
          </div>
        </div>
      </main>
    </div>
  );
};
export default MapPage;
