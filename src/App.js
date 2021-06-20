// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./App.css";
import React, { useState } from "react";

// react router dom
import { Switch, Route } from "react-router-dom";

// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// firebase
import firebase from "firebase/app";
import "firebase/auth";

// components
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PageNotFound from "./pages/PageNotFound";

// layout
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";

// user context
import UserContext from "./context/UserContext";

// Initialize Firebase
import firebaseConfig from "./config/firebaseConfig";
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <ToastContainer />

      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
