import React from "react";
import Appbutton from "./Appbutton";
import CancelBtn from "./cancelBtn";
import Loginbutton from "./Loginbutton";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
// import { width } from "@material-ui/system";

function SignUpBody() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div id="col1" className="col-lg-3"></div>
          <div id="col2" className="col-lg-6">
            <div>
              <form>
                <div className="Auth-form1-wrapper">
                  <div className="Auth-form1-Header"></div>
                  <div className="Auth-form1-Error-Header"></div>
                  <div className="Auth-form1-Body">
                    <div className="Auth-form1-field-group col">
                      <div className="form-group">
                        <label for="exampleInputEmail1">
                          <h4>Email address</h4>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="signup-email-input"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                        {/* <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small> */}
                      </div>

                      <div className="vertical-spacing3"></div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">
                          <h4>Password</h4>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="signup-password-input"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="vertical-spacing1"></div>
                    <div className="Auth-form1-btn-group col">
                      <div className="row">
                        <div className="col-md-6">
                          <Appbutton caption="Sign Up" />
                        </div>
                        <div className="col-md-6">
                          <CancelBtn caption="Cancel" />
                        </div>
                      </div>

                      <div className="vertical-spacing3"></div>

                      <div className="row">
                        <div className="col-md-12">
                          <center>
                            <h5>Log In if you already have an Account</h5>
                          </center>
                        </div>

                        <div className="col-md-12">
                          <Loginbutton caption="Log in" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div id="col3" className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}
export default SignUpBody;
