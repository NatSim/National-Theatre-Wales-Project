import React from "react";
import "../Terms/TermsPage.css";
import TermsContent from "../../Components/PageContent/Terms/Terms";
import SideNav from "../../Components/Nav/SideNav";
import Header from "../../Components/Header/Header";
import * as CgIcons from "react-icons/cg";

const Terms = () => {
  //Header Profile icon/path
  const profileLink7 = "/profile";
  const profileIcon7 = [<CgIcons.CgProfile className="profile-svg" />];

  return (
    <>
      <SideNav />
      <Header Link={profileLink7} Icon={profileIcon7} />
      <div className="terms-page">
        <h1 className="title">Terms {`&`} Conditions</h1>
        <section>
          <TermsContent />
        </section>
      </div>
    </>
  );
};

export default Terms;
