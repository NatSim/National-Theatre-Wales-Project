import React from "react";
import "./TermsPage.css";
import TermsContent from "../Components/PageContent/Terms";
import SideNav from "../Components/Nav/SideNav";
import Header from "../Components/Header/Header";

const Terms = () => {
  return (
    <>
      <SideNav />
      <Header />
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
