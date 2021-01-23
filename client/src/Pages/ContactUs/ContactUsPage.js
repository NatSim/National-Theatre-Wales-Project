import React from "react";
import Form from "../../Components/PageContent/ContactForm";
import "../ContactUs/ContactUsPage.css";
import SideNav from "../../Components/Nav/SideNav";

const ContactUsPage = () => {
  return (
    <>
      <SideNav />
      <div id="contact-page" className="home-button-container">
        <section>
          <Form />
        </section>
      </div>
    </>
  );
};

export default ContactUsPage;
