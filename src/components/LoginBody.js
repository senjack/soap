import React from 'react';
import Appbutton from './Appbutton';
import AppCancelBtn from './AppCancelBtn';
import SignupBtn from './SignupBtn';
import "../App.css";


function LoginBody() {
    return (
        <div className="App">
            <div className="container" >
                <div className="row">
                    <div id="col1" className="col-lg-3"></div>
                    <div id="col2" className="col-lg-6">
                        <div className="form-wrapper">
                            <form>
                                <div className="form-header">
                                    <h3>LOGIN FORM</h3>
                                </div>
                                <div className="login-error"></div>
                                <div>
                                    <label for="email">Email</label><br />
                                    <input type="email" name="email" id="" />
                                </div>
                                <div>
                                    <label for="password">Password</label><br />
                                    <input type="password" name="password" id="" />
                                </div>

                                <div className="form-btns">
                                    <Appbutton caption="Login" />
                                    <AppCancelBtn caption="Cancel" />
                                </div>
                                <div>
                                   <h4><a href="hhh">Forgot your password?</a></h4> 
                                </div>

                                <div className="signup-btn">
                                <SignupBtn caption="Signup" />
                                </div>

                            </form>
                        </div>
                    </div>
                    <div id="col3" className="col-lg-3"></div>
                </div>
            </div>
        </div>
    )

} export default LoginBody;