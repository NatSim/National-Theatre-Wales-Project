import React, { useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import SideNav from "../../Nav/SideNav";

function ContactForm(props) {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    placeholder: {
      name: "Enter Name",
      email: "Enter Email",
      message: "Write message here...",
    },
  });

  //POST REQUEST - This sends message to server
  const sendContactForm = () => {
    Axios.post("http://localhost:5000/contact", {
      name: state.name,
      email: state.email,
      message: state.message,
      subject: state.subject,
    }) //line 29 goes to server
      .then(function (response) {
        if (response.status === 201) {
          setState((prevState) => ({
            ...prevState,
            successMessage: "User has submitted a contact form",
          }));
          console.log("Successful!");
        } else {
          console.log("Error!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //Select, Text Input & Submit Button  event handlers
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  //Handles Input changes
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    sendContactForm();
  };

  return (
    <>
      <section className="title-container">
        <nav className="side-nav-control">
          <SideNav />
        </nav>
      </section>
      <form
        action=""
        method="get"
        className="form-parent"
        onSubmit={handleSubmit}
      >
        {" "}
        <h1>Contact Us</h1>
        <div className="contact-form-child">
          {/* <label>Username:</label> */}
          <input
            className="form-control"
            type="name"
            id="name"
            placeholder={state.placeholder.name}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form-child">
          {/* <label>Email:</label> */}
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder={state.placeholder.email}
            onChange={handleChange}
          />
        </div>
        <div id="select-control" className="contact-form-child">
          {/* <label>Subject</label> */}
          <span style={{ fontSize: "20px", float: "left" }}>
            Select <i className="text-danger">required</i>
          </span>
          <select
            type="subject"
            id="subject"
            defaultValue={"DEFAULT"}
            onChange={handleChange}
          >
            <option>--Please select a subject--</option>
            <option value="general">General Feedback</option>
            <option value="app-support">Application Support</option>
            <option value="ntw">National Theatre Wales Team Enquiry</option>
          </select>
        </div>
        <div className="contact-form-child">
          {/* <label>Message:</label> */}
          <textarea
            type="message"
            id="message"
            placeholder={state.placeholder.message}
            value={state.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default ContactForm;
