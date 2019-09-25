import React from "react";
import "../App.css";
import LoginBody from "./LoginBody";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
<<<<<<< HEAD
import signup from "./signUp";
import LoginBody from "./LoginBody";
=======
>>>>>>> 80441989887a696db3f65614d36367c4380b9c6f

function login() {
  // <Route path="/applicant/login" component={signup} />
  //   <Route path="/staff/login" component={signup} />
  //   <Route path="/admin/login" component={signupc} />

  let resolver = () => {
    return <Route component={LoginBody} />;
  };
<<<<<<< HEAD
  return (
    <Router>
      <div>
        <Route component={LoginBody} />
      </div>
    </Router>
  );
=======
  return <Router>{resolver()}</Router>;
>>>>>>> 80441989887a696db3f65614d36367c4380b9c6f
}

export default login;
