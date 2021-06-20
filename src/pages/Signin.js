import React from "react";

import "./Signin.css";
function Signin() {
  return (
    <main className="form-signin mt-5">
      <form className="center">
        <h1 className="h3 mb-3 fw-normal text-center ">Please Signin</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
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
          Login
        </button>
      </form>
    </main>
  );
}

export default Signin;
