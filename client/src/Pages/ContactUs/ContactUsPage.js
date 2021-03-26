import React from "react";
import "../ContactUs/ContactUsPage.css";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";
import ContactInfo from "../../components/PageContent/ContactForm/ContactInfo";

const ContactUsPage = () => {
  return (
    <>
      <SideNav />
      <Header />
      <div className="form-content-parent">
        <div className="subtitle3">
          <h1>Contact Us</h1>
        </div>
        <div>
          <p>
            We operate from a small base in Cardiff’s city centre, but we work
            all over the country, and beyond, using Wales’ rich and diverse
            landscape, its towns, cities and villages, its incredible stories
            and wealth of talent as our inspiration.
          </p>
        </div>
        <div className="form-content-parent">
          <section>
            <ContactInfo />
          </section>
        </div>{" "}
      </div>
    </>
  );
};

export default ContactUsPage;
