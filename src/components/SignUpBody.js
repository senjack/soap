import React from "react";
import AuthForm1 from "./AppForms/AuthForm1";
import SignUpSuccessForm from "./AppForms/SignUpSuccessForm";
function SignUpBody() {
  return (
    <div>
      <SignUpSuccessForm />
      <AuthForm1
        formType="signup"
        formTitle="SIGNUP FORM"
        btnCaption1="Signup"
        btnCaption2="Login"
      />
    </div>
  );
}
export default SignUpBody;


