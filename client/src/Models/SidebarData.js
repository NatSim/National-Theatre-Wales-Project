import React from "react";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as CgIcons from "react-icons/cg";
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
    title: "Monologues",
    path: "/monolgues",
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
    title: "My Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile />,
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
