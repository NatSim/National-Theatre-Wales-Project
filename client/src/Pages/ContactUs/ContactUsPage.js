import React from "react";
import Form from "../../components/PageContent/ContactForm/ContactForm";
import "../ContactUs/ContactUsPage.css";
import SideNav from "../../components/Nav/SideNav";
import Header from "../../components/Header/Header";

const ContactUsPage = () => {
  return (
    <>
      <Header />
      <div>
        <section>
          <Form />
        </section>
      </div>
    </>
  );
};

export default ContactUsPage;
