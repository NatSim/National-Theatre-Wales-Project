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

  render() {
    return (
      <>
        <section className="title-container">
          <h1>Contact Us</h1>
        </section>

        <form action="" method="get" className="form-parent">
          <div className="contact-form-child">
            {/* <label>Username:</label> */}
            <input
              type="text"
              placeholder={this.state.placeholder.username}
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div className="contact-form-child">
            {/* <label>Email:</label> */}
            <input
              required
              type="text"
              placeholder={this.state.placeholder.email}
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="contact-form-child">
            {/* <label>Subject</label> */}
            <select
              defaultValue={"DEFAULT"}
              required
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
              value={this.state.message}
              onChange={this.handleMessageChange}
            ></textarea>
          </div>
          <Button>Submit</Button>
        </form>
      </>
    );
  }
}

export default Form;
