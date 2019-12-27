import React from "react";
import Modal from '@material-ui/core/Modal';
import AuthButton1 from "../AppButtons/AuthButton1";
import DialogForm from "./DialogForm";

let SignUpSuccessForm = (props) => {
return(
    <div>
        <DialogForm status="success" title="Success" subTitle="Congratulations!" >
            <div>
            You have successfully created your account.<br/>
            Now you can log into your account and fill the application form.
            </div>
        </DialogForm>
        {/* <AuthButton1 caption="Login" /> */}
        
    </div>

);

}

export default SignUpSuccessForm;