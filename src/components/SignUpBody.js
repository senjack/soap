import React from "react";
import AuthForm1 from "./AuthForm1";

function SignupBody() {
  return (
    <div>
      <AuthForm1
        formType="signup"
        formTitle="SIGNUP FORM"
        btnCaption1="Signup"
        btnCaption2="Login"
      />
    </div>
  );
}
export default SignupBody;


