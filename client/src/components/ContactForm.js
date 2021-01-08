import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

function ContactForm(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    message: "",
    subject: "",
    placeholder: {
      username: "Enter Username",
      email: "Enter Email",
      message: "Write message here...",
    },
  });

  //POST REQUEST - This sends message to server
  const sendContactForm = () => {
    if (state.username.length && state.email.length && state.message.length) {
      console.log("There is a message!");
      const payload = {
        username: state.username,
        email: state.email,
        message: state.message,
        subject: state.subject,
      };
      axios
        .post("http://localhost:5000/contact", payload)
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
    } else {
      console.log("Invalid inputs!");
    }
  };

  //Select, Text Input & Submit Button  event handlers
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({ ...prevState, [id]: value }));
  };

  //Handles Select value

  //Handles Input changes
  const handleSubmit = (event) => {
    event.preventDefault();

    sendContactForm();
  };

  return (
    <>
      <section className="title-container">
        <h1>Contact Us</h1>
      </section>

      <form
        action=""
        method="get"
        className="form-parent"
        onSubmit={handleSubmit}
      >
        <div className="contact-form-child">
          {/* <label>Username:</label> */}
          <input
            className="form-control"
            type="username"
            id="username"
            placeholder={state.placeholder.username}
            value={state.username}
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
            value={state.email}
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
            value={state.subject}
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
