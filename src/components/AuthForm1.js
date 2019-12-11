import React from "react";
import AuthButton1 from "./AuthButton1";
import AuthButton2 from "./AuthButton2";
// import AuthButton3 from "./AuthButton2";
import "bootstrap/dist/css/bootstrap.css";
import "../appStyles/App.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AuthForm1 extends React.Component {
  state = { title: undefined };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12  col-lg-3 col-xl-3"></div>
            <div className="col-sm-12 col-md-12  col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-12 col-md-12  col-lg-12 col-xl-1"></div>
                <div className="col-sm-12 col-md-12  col-lg-12 col-xl-10">
                  <div>
                    <div className="vertical-spacing3"></div>

                    <form id="AuthForm1" name="AuthForm1">
                      <div className="Auth-form1-wrapper">
                        <div className="Auth-form1-Header">
                          <h4>
                            <strong>{this.props.formTitle}</strong>
                          </h4>
                        </div>
                        {this.props.appState.AuthOneReducer.user.error ? (
                          <div className="Auth-form1-Error-Header">
                            <span className="soap-app-h4">
                              {
                                this.props.appState.AuthOneReducer.user
                                  .authError.errorHead
                              }
                            </span>
                            <span>
                              {" "}
                              {
                                this.props.appState.AuthOneReducer.user
                                  .authError.errorBody
                              }
                            </span>
                          </div>
                        ) : null}

                        {this.props.appState.AuthOneReducer.user.registration
                          .success ? (
                          <div className="Auth-form1-Succes-Header btn-success">
                            <span className="soap-app-h4">Success!</span>
                            <span>
                              {" "}
                              You have successfully created your Account.
                            </span>
                          </div>
                        ) : null}
                        <div className="Auth-form1-Body">
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                <div className="form-group">
                                  <label htmlFor="Auth-form1-input1">
                                    <h4>Email address</h4>
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="Auth-form1-input1"
                                    name="AuthForm1Input1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter your email address"
                                  />
                                  <div className="email-error">
                                    Invalid Email Address
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-spacing2"></div>
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                {/* Password Field */}
                                <div className="form-group">
                                  <label htmlFor="Auth-form1-input2">
                                    <h4>Password</h4>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-error-outline form-control"
                                    id="Auth-form1-input2"
                                    name="AuthForm1Input2"
                                    aria-describedby="passwordHelp"
                                    placeholder="Enter your password here"
                                  />
                                  <div className="password-error">
                                    Incorrect password
                                  </div>
                                </div>

                                {/* confirm Password field */}
                                {/* {this.props.formType === "signup" ? 
                                <div className="form-group">
                                <div className="vertical-spacing2"></div>
                                <label htmlFor="Auth-form1-input3">
                                  <h4>Confirm Password</h4>
                                </label>
                                <input
                                  type="password"
                                  className="form-error-outline form-control"
                                  id="Auth-form1-input3"
                                  name = "AuthForm1Input3"
                                  aria-describedby="passwordHelp"
                                  placeholder="Re-enter password"
                                />
                                <div className="password-error">
                                  Incorrect password
                                </div>
                              </div> 
                                
                                  :
                                  null} */}
                              </div>
                            </div>
                          </div>

                          <div className="vertical-spacing2"></div>

                          <div className="container">
                            <div id="Auth-form1-btn-margin" className="row">
                              <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6">
                                <AuthButton1
                                  caption={this.props.btnCaption1}
                                  action={this.props.formType}
                                />
                              </div>
                              <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6">
                                <AuthButton2
                                  btnRole="reset"
                                  caption="Cancel"
                                  action={this.props.formType}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="vertical-spacing3"></div>

                          <div className="row">
                            <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                              <center
                                id={
                                  this.props.formType !== "login"
                                    ? "hide"
                                    : null
                                }
                              >
                                <Link to="/applicant/resetpassword/">
                                  <h6>Forgot your password?</h6>
                                </Link>
                              </center>
                              <center
                                id={
                                  this.props.formType !== "signup"
                                    ? "hide"
                                    : null
                                }
                              >
                                <h5>Log In if you already have an Account</h5>
                              </center>
                            </div>
                          </div>
                          <div className="container">
                            <div id="Auth-form1-btn-signup" className="row">
                              <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                <AuthButton2
                                  btnRole="toggle"
                                  caption={this.props.btnCaption2}
                                  action={this.props.formType}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-col-sm-12 col-md-12  col-lg-12 col-xl-1"></div>
              </div>
            </div>
            <div
              id="col3"
              className="col-sm-12 col-md-12  col-lg-3 col-xl-3"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = appState => {
  // console.log(appState.AuthOneReducer.user.registration);
  return { appState: appState };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signup,
//     login,
//   }
// }

//   Connect redux with react
export default connect(mapStateToProps /* mapDispatchToProps() */)(AuthForm1);
