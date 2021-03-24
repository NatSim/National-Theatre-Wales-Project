import React from "react";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";
import AccessContent from "../../components/PageContent/Access/AccessContent";

const Access = () => {
  //Header Profile icon/path
  const profileLink7 = "/profile";
  const profileIcon7 = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <SideNav />
      <Header Link={profileLink7} Icon={profileIcon7} />
      <div className="terms-page">
        <h1 className="subtitle1">Accessibility</h1>
        <section>
          <AccessContent />
        </section>
      </div>
    </>
  );
};

export default Access;
