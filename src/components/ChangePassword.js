import React from "react";
import "../App.css";
import AuthButton2 from "./AuthButton2";
import ChangePasswordBody from "./ChangePasswordBody";

function changePassword() {
  return (
    <div>
      <ChangePasswordBody
        formType="change password"
        btnCaption="Change Password"
      />
    </div>
  );
}

export default changePassword;
