import React from "react";
import "./App.css";

import home from "./components/Home";
import Nav from "./components/nav";
import login from "./components/login";
import signup from "./components/signUp";
import applicant from "./components/applicant";
import admin from "./components/Admin";
import staff from "./components/Staff";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  state = {
    redirect: true
  };
  render() {
    const notfound = () => {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to="/login" />;
      }
    };
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/login" component={login} />
            <Route path="/signup" exact component={signup} />
            <Route path="/applicant" component={applicant} />
            <Route path="/admin" component={admin} />
            <Route path="/staff" component={staff} />
            <Route component={notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
