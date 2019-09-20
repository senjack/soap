import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function applicant() {
  return (
    <div>
      <h1>Applicant page</h1>
      <ul>
        <Link to="/applicant/application">
          <li>Application</li>
        </Link>
      </ul>
    </div>
  );
}

export default applicant;
