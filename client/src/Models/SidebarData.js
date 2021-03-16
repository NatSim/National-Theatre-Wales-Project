import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";

const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about/2",
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
    title: "Contact",
    path: "/contact",
    icon: <MdIcons.MdEmail />,
    cName: "nav-text",
  },
];

export { SidebarData };
