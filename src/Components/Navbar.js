import React from "react";
import PropTypes from "prop-types";
import {Link } from 'react-router-dom';

export default function Navbar(prop) {
  return (

    
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${prop.mode==='light'?'light':'dark'} bg-${prop.mode==='light'?'light':'dark'}`}>
        <div className={`container-fluid`}>
          <Link className="navbar-brand" to="/">
            {prop.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {prop.about}
                </Link>
              </li>
            </ul>
          <div className= {`form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={prop.togleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype ={
   title: PropTypes.String,
   about: PropTypes.String,
}

// Specifies the default values for props:
Navbar.defaultProps = {
    title: "TextUtils",
    about: "About",
  };
  