import React from "react";
import "./TermsPage.css";
import TermsContent from "../Components/PageContent/Terms";
import SideNav from "../Components/Nav/SideNav";

const Terms = () => {
  return (
    <>
      <SideNav />
      <div className="terms-page">
        <h1>Terms {`&`} Conditions</h1>
        <section>
          <TermsContent />
        </section>
      </div>
    </>
  );
};

export default Terms;
