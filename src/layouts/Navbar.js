import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const context = useContext(UserContext);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link
              className="navbar-brand text-warning text-uppercase font-weight-bold"
              to="/"
            >
              React Firebase
            </Link>
            <h6 className="text-warning text-uppercase font-weight-bold ms-5 mt-3">
              {context.user?.email ? context.user : null}
            </h6>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                {/* <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    to="/"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li> */}

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/home"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/signup"
                    activeClassName="active"
                  >
                    Singup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/signin"
                    activeClassName="active"
                  >
                    Signin
                  </NavLink>
                </li>

                {context.user?.email ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="active">
                      Signout
                    </NavLink>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
