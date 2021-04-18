import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../../Models/SidebarData";
import "./SideNav.css";
import { IconContext } from "react-icons";

function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <div className="nav-bar">
          <Link to="#" className="menu-bars"></Link>
          <FaIcons.FaBars className="menu-svg" onClick={showSidebar} />
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>
                      {item.title && item.id_1 === 1 ? (
                        <Trans i18nKey="navList.0"></Trans>
                      ) : (
                        ""
                      )}
                      {item.title && item.id_2 === 2 ? (
                        <Trans i18nKey="navList.1"></Trans>
                      ) : (
                        ""
                      )}
                      {item.title && item.id_3 === 3 ? (
                        <Trans i18nKey="navList.2"></Trans>
                      ) : (
                        ""
                      )}
                      {item.title && item.id_4 === 4 ? (
                        <Trans i18nKey="navList.3"></Trans>
                      ) : (
                        ""
                      )}
                      {item.title && item.id_5 === 5 ? (
                        <Trans i18nKey="navList.4"></Trans>
                      ) : (
                        ""
                      )}
                      {item.title && item.id_6 === 6 ? (
                        <Trans i18nKey="navList.5"></Trans>
                      ) : (
                        ""
                      )}
                      {item.title && item.id_7 === 7 ? (
                        <Trans i18nKey="navList.6"></Trans>
                      ) : (
                        ""
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNav;
