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
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
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
