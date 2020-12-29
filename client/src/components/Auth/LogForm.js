import React, { useState } from "react";

//Login functions
function LoginForm(props) {
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

    // return (
    //   <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
    //     <button
    //       type="submit"
    //       className="btn btn-primary"
    //       onClick={handleSubmitClick}
    //     >
    //       Login
    //     </button>
    //   </div>
    // );
  };
  return (
    <div id="card" className="card col-12 col-lg-4 login-card mt-2 hv-center">
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

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
        <div>forgot password here</div>
      </form>
    </div>
  );
}

export default LoginForm;
