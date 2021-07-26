import React from "react";
import { useTranslation } from "react-i18next";
import SideNav from "../../components/Nav/SideNav";
import AccessContent from "../../components/PageContent/Access/AccessContent";

const Access = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div className="terms-page">
        <nav className="sidenav-container">
          <SideNav />{" "}
          <div className="translate-button2">
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
            {/* Translation Button END HERE */}
          </div>
        </nav>

        <h1 className="subtitle1">{t("accessibilityContent.0")}</h1>
        <section>
          <AccessContent />
        </section>
      </div>
    </>
  );
};

export default Access;
