import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function staff() {
  return (
    <div>
      <h1>staff page</h1>
      <ul>
        <Link to="/staff/selection">
          <li>selection</li>
        </Link>
        <Link to="/staff/interview">
          <li>interview</li>
        </Link>
        <Link to="/staff/admission">
          <li>admission</li>
        </Link>
      </ul>
    </div>
  );
}

export default staff;
