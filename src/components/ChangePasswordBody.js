import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../appStyles/App.css";
import InputAdornments from "./password";
import Loginbutton from "./Loginbutton";

class changePasswordBody extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12  col-lg-3 col-xl-3"></div>
            <div className="col-sm-12 col-md-12  col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-sm-12 col-md-12  col-lg-1 col-xl-1"></div>
                <div className="col-sm-12 col-md-12  col-lg-10 col-xl-10">
                  <div>
                    <div className="vertical-spacing3"></div>

                    <form>
                      <div className="changePassword-wrapper">
                        <div className="Password-Header">
                          <div className="changePassword-Info">
                            <h4>
                              <strong>{this.props.formType}</strong>
                            </h4>
                          </div>
                        </div>
                        <div className="changePassword-Error-Header">
                          <b>Failed: </b>Invalid credentials!
                        </div>
                        <div className="changePassword-Body">
                          <div className="row">
                            <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                              <InputAdornments password="Enter Current Password" />
                              <div className="password-error">
                                Incorrect password
                              </div>
                            </div>
                          </div>

                          <div className="vertical-spacing2"></div>
                          <div className="row">
                            <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                              <InputAdornments password="Enter New password" />
                              <div className="password-error">
                                Incorrect password
                              </div>
                            </div>
                          </div>
                          <div className="vertical-spacing2"></div>

                          <div className="row">
                            <div className="col-sm-12 col-md-12  col-lg-12 col-xl-12">
                              <InputAdornments password="Re-enter New Password" />
                              <div className="password-error">
                                Incorrect password
                              </div>
                            </div>
                          </div>

                          <div id="changepasswordBtn" className="row">
                            <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6"></div>
                            <div className="col-sm-12 col-md-6  col-lg-6 col-xl-6">
                              <Loginbutton caption={this.props.btnCaption} />
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
