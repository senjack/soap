import React from "react";
import AuthButton1 from "./AuthButton1";
import AuthButton2 from "./AuthButton2";
// import AuthButton3 from "./AuthButton2";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import { Link } from "react-router-dom";
import InputAdornments from "./password";
import Loginbutton from "./Loginbutton";

class changePasswordBody extends React.Component {
  // state = { title: undefined };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            q <div className="col-sm-12 col-md-12  col-lg-3 col-xl-3"></div>
            <div className="col-sm-12 col-md-12  col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-12 col-md-12  col-lg-1 col-xl-1"></div>
                <div className="col-sm-12 col-md-12  col-lg-10 col-xl-10">
                  <div>
                    <div className="vertical-spacing3"></div>

                    <form>
                      <div className="changePassword-wrapper">
                        <div className="changePassword-Header">
                          <h4>
                            <strong>change Password</strong>
                          </h4>
                        </div>
                        <div className="Auth-form1-Error-Header">
                          <b>Failed: </b>Invalid credentials!
                        </div>
                        <div className="Auth-form1-Body">
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                <InputAdornments password="Enter Current Password" />
                                <div className="password-error">
                                  Incorrect password
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-spacing2"></div>
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                <InputAdornments password="Enter New password" />
                                <div className="password-error">
                                  Incorrect password
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="vertical-spacing2"></div>
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                                <InputAdornments password="Re-enter New Password" />
                                <div className="password-error">
                                  Incorrect password
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="container">
                            <div id="changepasswordBtn" className="row">
                              <div className="col-sm-12 col-md-16  col-lg-6 col-xl-6">
                                {/* <div
                                  id={this.props.formType == "change password"}
                                >
                                  <AuthButton2
                                    btnRole="toggle"
                                    caption={this.props.btnCaption}
                                    action={this.props.formType}
                                  /> */}
                                <Loginbutton caption={this.props.btnCaption} />
                                {/* </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-col-sm-12 col-md-12  col-lg-1 col-xl-1"></div>
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
export default changePasswordBody;
