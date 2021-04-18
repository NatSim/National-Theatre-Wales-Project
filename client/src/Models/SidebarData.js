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
    id_1: 1,
    title: <Trans i18nKey="navList.0"></Trans>,
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    id_2: 2,
    title: "About",
    path: "/show",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    id_3: 3,
    title: "Connect",
    path: "/connect",
    icon: <ImIcons.ImFilm />,
    cName: "nav-text",
  },
  {
    id_4: 4,
    title: "Listen",
    path: "/music",
    icon: <FaIcons.FaHeadphones />,
    cName: "nav-text",
  },
  {
    id_5: 5,
    title: "Act",
    path: "/simpleacts",
    icon: <RiIcons.RiPlantLine />,
    cName: "nav-text",
  },
  {
    id_6: 6,
    title: "TEAM",
    path: "/about/1",
    icon: <RiIcons.RiTeamLine />,
    cName: "nav-text",
  },
  {
    id_7: 7,
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdEmail />,
    cName: "nav-text",
  },
];

export { SidebarData };
