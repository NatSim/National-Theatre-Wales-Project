import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "../Components/ContactForm";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <div>
      <div id="contact-page" className="home-button-container">
        <Link to="/home">
          <Button className="button">Home</Button>
        </Link>
        <section>
          <Form />
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
