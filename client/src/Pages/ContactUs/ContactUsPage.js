import React from "react";
import { useTranslation } from "react-i18next";
import "../ContactUs/ContactUsPage.css";
import SideNav from "../../components/Nav/SideNav";
import ContactInfo from "../../components/PageContent/ContactForm/ContactInfo";

const ContactUsPage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="terms-page">
        <nav className="sidenav-container">
          <SideNav />
          <div className="translate-button-control">
            <span onClick={() => changeLanguage("en")}>En/</span>
            <span onClick={() => changeLanguage("welsh")}>Cymraeg</span>
            {/* Translation Button END HERE */}
          </div>
        </nav>

        <div className="form-content-parent">
          <div className="">
            <h1 className="subtitle1">{t("contactContent.0")}</h1>
          </div>
          <div>
            <p className="contact-location-info">{t("contactContent.1")}</p>
          </div>
          <div className="form-content-parent">
            <section>
              <ContactInfo />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
