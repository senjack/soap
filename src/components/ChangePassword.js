import React from "react";
import "../appStyles/App.css";

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
