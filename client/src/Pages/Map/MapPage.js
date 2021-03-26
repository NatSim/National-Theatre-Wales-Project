import React from "react";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";
import Maps from "../../components/PageContent/Maps/Maps";
import SideNav from "../../components/Nav/SideNav";

/***Static image or Google API
Tour Locations ***/
export default function MapPage() {
  //Header Profile icon/path
  const Item = "/profile";
  const itemIcon = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <div>
      <SideNav />
      <Header Link={Item} Icon={itemIcon} />
      <h3 className="subtitle1">Tour Locations</h3>
      <div>
        <Maps />
      </div>
    </div>
  );
}
