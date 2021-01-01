import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      message: "",
      subject: "general",
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
      <div className="contact-form">
        <section className="title-container">
          <h1>Contact Us</h1>
        </section>
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div>
            <label>Subject</label>
            <select
              value={this.state.subject}
              onChange={this.handleSubjectChange}
            >
              <option value="general">General Feedback</option>
              <option value="app-support">Application Support</option>
              <option value="ntw">National Theatre Wales Team Enquiry</option>
            </select>
          </div>
          <div>
            <label>Message:</label>
            <textarea
              type="text"
              value={this.state.message}
              onChange={this.handleMessageChange}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
