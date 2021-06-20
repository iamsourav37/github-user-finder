import React from "react";

import "./Signin.css";

function Signup() {
  document.title = "Signup Page";

  return (
    <main className="form-signin mt-5">
      <form>
        <h1 className="h3 mb-3 fw-normal text-center">Signup Form</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="enter your email..."
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Create Account
        </button>
      </form>
    </main>
  );
}

export default Signup;
