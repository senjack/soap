import React from "react";
import AppDrawerButton from "../../AppButtons/AppDrawerButton"
function ApplicantMenuButtonsSection(props) {
  return (
    <div>
        <div className="col-sm-12" style={{paddingTop:"0px",marginTop:"-10px",}}>
          <AppDrawerButton caption="Application Forms" action={(e)=>{console.log("Loading Application form.........");alert("Loading Application form.........");}}/>
          <AppDrawerButton caption="Preview Completed forms" action={(e)=>{console.log("Previewing Completed Application form(s)");alert("Previewing Completed Application form(s)");}}/>
          <AppDrawerButton caption="Feedback" action={(e)=>{console.log("Getting Feedback");alert("Getting Feedback");}}/>
          <AppDrawerButton caption="Help" action={(e)=>{console.log("Loading System documentation .........");alert("Loading System documentation .........");}}/>
        </div>

    </div>
  );
}

export default ApplicantMenuButtonsSection;
