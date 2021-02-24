import React from "react";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";
import mapPlaceholder from "../../images/Maps/Pembrok.jfif";

/***Static image or Google API
Tour Locations ***/
export default function MapPage() {
  //Header Profile icon/path
  const Item = "/profile";
  const itemIcon = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <div>
      <Header Link={Item} Icon={itemIcon} />
      <h3 className="subtitle1">Tour Locations</h3>
      <img src={mapPlaceholder} alt="tour-locations" />
    </div>
  );
}
