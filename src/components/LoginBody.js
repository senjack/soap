import React from "react";
import AuthForm1 from "./AuthForm1";

const LoginBody = () =>{
  return (
    <div>
      <AuthForm1
        formType="login"
        formTitle="LOGIN FORM"
        btnCaption1="Login"
        btnCaption2="Signup"
      />
    </div>
  );
}
export default LoginBody;
