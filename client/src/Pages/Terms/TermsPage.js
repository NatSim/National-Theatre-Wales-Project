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
          {/* <TermsContent /> */}
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis quam at massa pulvinar, viverra tincidunt enim auctor.
            Pellentesque nec leo nunc. Proin bibendum, dui eget dapibus
            vestibulum, leo nibh interdum nulla, nec suscipit ante tellus vel
            urna. Praesent tempor lacus vitae orci bibendum mattis. Mauris eu
            maximus risus. Morbi nunc lectus, interdum nec eleifend ut,
            elementum vitae quam. Suspendisse potenti. Cras id volutpat ante.
            Integer et pellentesque risus, non congue turpis. Fusce et orci vel
            tellus venenatis malesuada quis ac orci. Nunc suscipit enim in orci
            placerat dignissim.
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
