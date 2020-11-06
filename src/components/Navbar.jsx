import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* <Link to="/">Kesha Hall</Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/"> About </Link>
            </li>
            
            <li className="nav-item">
            <Link to="/portfolio"> Portfolio </Link>
            </li>
            
            <li className="nav-item">
            <Link to="/contact"> Contact </Link>
            </li>
            
          </ul>
        </div>
      </nav>
      <div></div>
    </div>
  );
};

export default Navbar;

