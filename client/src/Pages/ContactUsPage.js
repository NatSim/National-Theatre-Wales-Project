import React from "react";
import Form from "../Components/ContactForm";
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
