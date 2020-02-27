import React from "react";
// import {connect} from 'react-redux';
import "./appStyles/App.css";
import "./appStyles/photos.css";
import AppIndex from "./components/AppIndex";
import apply from "./components/apply";
import login from "./components/login";
import SignUpBody from "./components/SignUpBody";
import LoginBody from "./components/LoginBody";
import signup from "./components/signUp";

// import ResponsiveAppDrawer from './components/AppDrawers/ResponsiveAppDrawer';
import ApplicantDetails from './components/Applicant/Application/ApplicantDetails'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // withRouter
} from "react-router-dom";
import SignUpSuccessForm from "./components/AppForms/SignUpSuccessForm";

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
          <Switch>
            <Route exact path="/" component={AppIndex} />
            <Route exact path="/apply" component={apply} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
            <Route exact path="/applicant/signup" component={SignUpBody} />
            <Route exact path="/applicant/login" component={LoginBody} /> 
            <Route exact path="/applicant/success" component={SignUpSuccessForm} /> 

{/* Applicant Routes START */}
            {/* <Route exact path="/applicant/application/catalyst/applicant-details" component={ResponsiveAppDrawer}/> */}
            <Route exact path="/applicant/application/catalyst/applicant-details" component={ApplicantDetails}/>
{/* Applicant Routes END */}
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
