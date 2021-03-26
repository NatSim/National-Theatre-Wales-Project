import React from "react";

const ContactInfo = () => {
  return (
    <div className="form-sizing-control">
      <ul>
        <li className="form-title-control">
          Email:
          <a className="anchor-control" href="info@nationaltheatrewales.org">
            info@nationaltheatrewales.org
          </a>
        </li>
        <li className="form-title-control">
          Box Office:{" "}
          <a className="anchor-control" href="+44 (0)29 2037 1689">
            +44 (0)29 2037 1689
          </a>
        </li>
        <li className="form-title-control">
          Phone:{" "}
          <a className="anchor-control" href="+44 (0)29 2035 3070">
            +44 (0)29 2035 3070
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ContactInfo;
