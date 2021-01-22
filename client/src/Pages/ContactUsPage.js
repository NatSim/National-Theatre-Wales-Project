import React from "react";
import Form from "../Components/PageContent/ContactForm";
import "./ContactUsPage.css";
import SideNav from "../Components/Nav/SideNav";

const ContactUsPage = () => {
  return (
    <div>
      <SideNav />
      <div id="contact-page" className="home-button-container">
        <section>
          <Form />
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
