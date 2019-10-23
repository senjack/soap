import React from "react";
// import {connect} from 'react-redux';
import "./appStyles/App.css";
import "./appStyles/photos.css";
// import "./appStyles/index.css";

import AppIndex from "./components/AppIndex";
import apply from "./components/apply";
// import Nav from "./components/nav";
import login from "./components/login";
import SignupBody from "./components/SignupBody";
import LoginBody from "./components/LoginBody";
import signup from "./components/signUp";
// import applicant from "./components/applicant";
// import admin from "./components/Admin";
// import staff from "./components/Staff";
// import application from "./components/application";
// import selection from "./components/selection";
// import admission from "./components/admission";
// import interview from "./components/interview";

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

  // componentDidMount(){
  //   console.log("Main App component was mounted");
  // }

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

          {/* <Nav /> */}
          {/* <div className="vertical-spacing3"></div> */}
          <Switch>
            <Route path="/" exact component={AppIndex} />
            <Route path="/apply" exact component={apply} />
            <Route path="/login" component={login} />
            <Route path="/signup" component={signup} />
            {/* <Route path="/applicant" exact component={applicant} /> */}
            {/* <Route path="/applicant/application" component={application} /> */}
            {/* <Route path="/admin" component={admin} /> */}
            <Route path="/applicant/signup" component={SignupBody} />
            <Route path="/applicant/login" component={LoginBody} />            
            {/* <Route path="/staff" exact component={staff} />
            <Route path="/staff/selection" component={selection} />
            <Route path="/staff/admission" component={admission} />
            <Route path="/staff/interview" component={interview} /> */}
            <Route component={notfound} />
          </Switch>
          <div className="vertical-spacing3"></div>
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = (appState) =>{
//   return {appState:appState};
// }

// const mapDispatchToProps = (dispatch) =>{
//   return {login:dispatch({type:'login'})};
// }

export default App;
// connect(mapStateToProps,mapDispatchToProps)(App);
