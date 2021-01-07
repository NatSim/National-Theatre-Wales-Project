import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";

const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Simple Acts",
    path: "/simpleacts",
    icon: <RiIcons.RiPlantLine />,
    cName: "nav-text",
  },
  {
    title: "Meditation",
    path: "/meditation",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Music",
    path: "/music",
    icon: <FaIcons.FaHeadphones />,
    cName: "nav-text",
  },
  {
    title: "Terms & Conditions",
    path: "/terms",
    icon: <SiIcons.SiReadthedocs style={{ width: "45px", height: "20px" }} />,
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
