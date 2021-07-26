import React from "react";
import { useTranslation } from "react-i18next";
import "../Terms/TermsPage.css";
import TermsContent from "../../components/PageContent/Terms/TermsContent";
import SideNav from "../../components/Nav/SideNav";

const Terms = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="terms-page">
        <nav className="sidenav-container">
          <SideNav />
        </nav>
        <div className="translate-button2">
          <button onClick={() => changeLanguage("en")}>En</button>
          <button onClick={() => changeLanguage("welsh")}>Cymraeg</button>
          {/* Translation Button END HERE */}
          <hr />
        </div>
        <h1 className="subtitle1">{t("termsContent.0")}</h1>
        <section>
          <TermsContent />
        </section>
      </div>
    </>
  );
};

export default Terms;
