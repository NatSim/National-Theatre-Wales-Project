import React from "react";
import Form from "../../Components/PageContent/ContactForm/ContactForm";
import "../ContactUs/ContactUsPage.css";
import SideNav from "../../Components/Nav/SideNav";
import * as CgIcons from "react-icons/cg";
import Header from "../../Components/Header/Header";

const ContactUsPage = () => {
  //Header Profile icon/path
  const Item = "/profile";
  const itemIcon = [<CgIcons.CgProfile className="profile-svg" />];

  return (
    <>
      <SideNav />
      <Header Link={Item} Icon={itemIcon} />
      <div id="contact-page" className="home-button-container">
        <section>
          <Form />
        </section>
      </div>
    </>
  );
};

export default ContactUsPage;
