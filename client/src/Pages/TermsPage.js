import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
