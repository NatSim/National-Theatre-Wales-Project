import React from "react";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";
import * as CgIcons from "react-icons/cg";

const Privacy = () => {
  //Header Profile icon/path
  const profileLink7 = "/profile";
  const profileIcon7 = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      <SideNav />
      <Header Link={profileLink7} Icon={profileIcon7} />
      <div className="terms-page">
        <h1 className="title">Privacy</h1>
        <section>{/* <TermsContent /> */}</section>
      </div>
    </>
  );
};

export default Privacy;
