import React from "react";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";
import AccessContent from "../../components/PageContent/Access/AccessContent";

const Access = () => {
  return (
    <>
      <SideNav />
      <Header />
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
