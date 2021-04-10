import React from "react";
import { Trans, useTranslation } from "react-i18next";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";
import AccessContent from "../../components/PageContent/Access/AccessContent";

const Access = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <SideNav />
      <Header />
      <div className="terms-page">
        <div className="translate-button">
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
          {/* Translation Button END HERE */}
          <hr />
        </div>
        <h1 className="subtitle1">{t("accessibilityContent.0")}</h1>
        <section>
          <AccessContent />
        </section>
      </div>
    </>
  );
};

export default Access;
