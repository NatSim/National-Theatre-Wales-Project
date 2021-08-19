import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="form-sizing-control">
      <ul>
        <li className="form-title-control">
          {t("contactContent.2")} <br />
          <a className="anchor-control" href="info@nationaltheatrewales.org">
            info@nationaltheatrewales.org
          </a>
        </li>
        <li className="form-title-control">
          {t("contactContent.3")} <br />
          <a className="anchor-control" href="+44 (0)29 2037 1689">
            +44 (0)29 2037 1689
          </a>
        </li>
        <li className="form-title-control">
          {t("contactContent.4")} <br />
          <a className="anchor-control" href="+44 (0)29 2035 3070">
            +44 (0)29 2035 3070
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ContactInfo;
