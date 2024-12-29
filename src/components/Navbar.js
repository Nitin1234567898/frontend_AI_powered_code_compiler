import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar({ title = "SET TITLE HERE", abouttext = "About" }) { // Default parameters for props
  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = !darkMode ? "#333333" : "#ffffff"; // Change body background
    document.body.style.color = !darkMode ? "#ffffff" : "#000000"; // Change body text color
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="btn btn-outline-secondary"
          onClick={toggleDarkMode}
          style={{ border: "none", background: "transparent" }}
        >
          {darkMode ? (
            <FaSun size={24} color="#f1c40f" /> // Sun icon for dark mode
          ) : (
            <FaMoon size={24} color="#34495e" /> // Moon icon for light mode
          )}
        </button>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {abouttext}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}