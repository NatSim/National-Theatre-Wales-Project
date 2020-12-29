import React, { useState } from "react";
import "../Auth/custom.css";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    //Handle submit button
    const handleSubmitClick = (e) => {
      e.preventDefault();
      if (state.password === state.confirmPassword) {
        // sendDetailsToServer();
      } else {
        props.showError("Passwords do not match");
      }
    };

    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </div>
    );
  };
  return (
    <div className="card">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
