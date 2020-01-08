import React from "react";
import PersonalDetailsForm from "../../AppForms/ApplicationForms/CatalystApplicationForm/PersonalDetailsForm";

function AppFillupWidthSection() {
  return (
    <div className="row">
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12"></div>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <div style={{width:"100%",background:"#fff",border:"1px solid #eee",padding:"15px"}}>
        {/* <button className="btn btn-large btn-success" style={{width:"100%"}}>Placeholder</button> */}
        <PersonalDetailsForm/>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 "></div>
    </div>
  );
}

export default AppFillupWidthSection;
