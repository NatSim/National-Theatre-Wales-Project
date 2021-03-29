import React from "react";
import "../Terms/TermsPage.css";
import TermsContent from "../../components/PageContent/Terms/TermsContent";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";

const Terms = () => {
  return (
    <>
      <SideNav />
      <Header />
      <div className="terms-page">
        <h1 className="subtitle1">Terms {`&`} Conditions</h1>
        <section>
          <TermsContent />
        </section>
      </div>
    </>
  );
};

export default Terms;
