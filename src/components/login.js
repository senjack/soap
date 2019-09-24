import React from "react";
import "../App.css";
//import LoginBody from "./LoginBody";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import signup from "./signUp";

function login() {
  // <Route path="/applicant/login" component={signup} />
  //   <Route path="/staff/login" component={signup} />
  //   <Route path="/admin/login" component={signupc} />

  const resolver = () => {
    return <Redirect to="/applicant/login" />;
  };
  return (
    <Router>
      <div>
        <Route component={resolver} />
      </div>
    </Router>
  );
}

export default login;
