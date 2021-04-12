import React from "react";
import { Trans, useTranslation } from "react-i18next";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";

const Translator = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
};

const SidebarData = [
  {
    title: <Trans i18nKey="navList.0"></Trans>,
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/show",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Connect",
    path: "/connect",
    icon: <ImIcons.ImFilm />,
    cName: "nav-text",
  },
  {
    title: "Listen",
    path: "/music",
    icon: <FaIcons.FaHeadphones />,
    cName: "nav-text",
  },
  {
    title: "Act",
    path: "/simpleacts",
    icon: <RiIcons.RiPlantLine />,
    cName: "nav-text",
  },
  {
    title: "TEAM",
    path: "/about/1",
    icon: <RiIcons.RiTeamLine />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdEmail />,
    cName: "nav-text",
  },
];

export { SidebarData };
