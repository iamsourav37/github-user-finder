import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import UserContext from "../context/UserContext";
import "./Signin.css";

import firebase from "firebase/app";

function Signup() {
  document.title = "Signup Page";

  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // account created
        console.log("user: ", res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((err) => {
        console.log("create account failed: ", err);
        return toast(`msg: ${err.message}, code: ${err.code}`, {
          type: "error",
        });
      });
  };

  return (
    <main className="form-signin mt-5">
      <form onSubmit={handleSignup}>
        <h1 className="h3 mb-3 fw-normal text-center">Signup Form</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="enter your email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
