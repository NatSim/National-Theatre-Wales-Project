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
          <SideNav />{" "}
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
            {/* Translation Button END HERE */}
          </div>
        </nav>

        <h1 className="subtitle1">{t("termsContent.0")}</h1>
        <section>
          <TermsContent />
        </section>
      </div>
    </>
  );
};

export default Terms;
