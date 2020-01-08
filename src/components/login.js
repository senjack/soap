import React from "react";
import "../appStyles/App.css";
import LoginBody from "./LoginBody";
import { BrowserRouter as Router, Route,Redirect,withRouter } from "react-router-dom";

function login(props) {
  // <Route path="/applicant/login" component={signup} />
  //   <Route path="/staff/login" component={signup} />
  //   <Route path="/admin/login" component={signupc} />

  let resolver = () => {
    if(localStorage.getItem("user group") && localStorage.getItem("user group") === "applicant"){
      // return <Redirect to="/applicant/login" />;
      props.history.push("/applicant/login");
    }
    else if(localStorage.getItem("user group") && localStorage.getItem("user group") === "staff"){
      props.history.push("/staff/login");
    }
    else if(localStorage.getItem("user group") && localStorage.getItem("user group") === "admin"){
      props.history.push("/admin/login");
    }
    else{
      // props.history.push("/");
      props.history.push("/applicant/login");
    }
  };
  return <Router>{resolver()}</Router>;
}

export default withRouter(login);
