import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  const listStyle = {
    color: "black"
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={listStyle} to="/applicant">
          <li>Applicant</li>
        </Link>
        <Link style={listStyle} to="/admin">
          <li>Administrator</li>
        </Link>
        <Link style={listStyle} to="/staff">
          <li>Staff</li>
        </Link>
        <Link style={listStyle} to="/signup">
          <li>SignUp</li>
        </Link>
        <Link style={listStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={listStyle} to="/apply">
          <li>Apply</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
