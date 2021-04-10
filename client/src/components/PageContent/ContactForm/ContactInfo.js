import React from "react";
import { Trans, useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="form-sizing-control">
      <ul>
        <li className="form-title-control">
          {t("contactContent.2")}
          <a className="anchor-control" href="info@nationaltheatrewales.org">
            info@nationaltheatrewales.org
          </a>
        </li>
        <li className="form-title-control">
          {t("contactContent.3")}
          <a className="anchor-control" href="+44 (0)29 2037 1689">
            +44 (0)29 2037 1689
          </a>
        </li>
        <li className="form-title-control">
          {t("contactContent.4")}
          <a className="anchor-control" href="+44 (0)29 2035 3070">
            +44 (0)29 2035 3070
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ContactInfo;
