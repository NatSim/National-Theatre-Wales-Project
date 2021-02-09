import React from "react";
import Form from "../../components/PageContent/ContactForm/ContactForm";
import "../ContactUs/ContactUsPage.css";
//import SideNav from "../../components/Nav/SideNav";
import * as CgIcons from "react-icons/cg";
import Header from "../../components/Header/Header";

const ContactUsPage = () => {
  //Header Profile icon/path
  const Item = "/profile";
  const itemIcon = <CgIcons.CgProfile className="profile-svg" />;

  return (
    <>
      {/* <SideNav /> */}
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
