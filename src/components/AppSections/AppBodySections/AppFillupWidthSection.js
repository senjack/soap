import React from "react";
import PersonalDetailsForm from "../../AppForms/ApplicationForms/CatalystApplicationForm/PersonalDetailsForm";

function AppFillupWidthSection(props) {
  let {slot1,slot2} = props;
  return (
    <div className="row">
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12"></div>
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <div style={{width:"100%"}}>
          <div style={{width:"100%"}}>
            {slot2}
          </div>
          <div style={{width:"100%",background:"#fff",border:"1px solid #eee",padding:"15px"}}>
            {slot1}
          </div>
        </div>
      </div>
      <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 "></div>
    </div>
  );
}

export default AppFillupWidthSection;
