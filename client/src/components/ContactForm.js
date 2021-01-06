import axios from "axios";
import { Component } from "react";
import Button from "react-bootstrap/Button";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      message: "",
      placeholder: {
        username: "Enter Username",
        email: "Enter Email",
        message: "Write message here...",
      },
      subject: "",
    };
  }
  //POST REQUEST - This sends the contact form to Database
  sendContactFormToServer = () => {
    if (
      this.state.username.length &&
      this.state.email.length &&
      this.state.message.length &&
      this.state.subject.length
    ) {
      console.log("There is a message!");
      const payload = {
        username: this.state.username,
        email: this.state.email,
        message: this.state.message,
        subject: this.state.subject,
      };

      axios
        .post("http://localhost:5000/contact", payload)
        .then(function (response) {
          if (response.status === 200) {
            console.log("Message sent");
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
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    sendContactFormToServer();
  };

  render() {
    //adding 'this.state' here covers all occurances thus allows DRY/cleaner code
    const { username, email, message } = this.state;

    return (
      <>
        <section className="title-container">
          <h1>Contact Us</h1>
        </section>

        <form
          action=""
          method="get"
          className="form-parent"
          onSubmit={this.handleSubmit}
        >
          <div className="contact-form-child">
            {/* <label>Username:</label> */}
            <input
              required
              className="form-control"
              type="text"
              placeholder={this.state.placeholder.username}
              value={username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div className="contact-form-child">
            {/* <label>Email:</label> */}
            <input
              required
              className="form-control"
              type="text"
              placeholder={this.state.placeholder.email}
              value={email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div id="select-control" className="contact-form-child">
            {/* <label>Subject</label> */}
            <select
              required
              defaultValue={"DEFAULT"}
              onChange={this.handleSubjectChange}
            >
              <option value="DEFAULT" disabled>
                --Please select a subject--
              </option>
              <option value="general">General Feedback</option>
              <option value="app-support">Application Support</option>
              <option value="ntw">National Theatre Wales Team Enquiry</option>
            </select>
          </div>
          <div className="contact-form-child">
            {/* <label>Message:</label> */}
            <textarea
              required
              type="text"
              placeholder={this.state.placeholder.message}
              value={message}
              onChange={this.handleMessageChange}
            ></textarea>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </>
    );
  }
}

export default Form;
