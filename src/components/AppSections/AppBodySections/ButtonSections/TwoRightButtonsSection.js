import React from "react";

function TwoRightButtonsSection(props) {
  let {slot1,slot2} = props;
  return (
    <div className="row" style={{marginTop:"15px"}}>
      <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12">
          {/* <div style={{backgroundColor:"#ddd",width:"100%"}}>Hidden section</div> */}
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" style={{marginBottom:"15px"}}>
        <div style={{backgroundColor:"#ddd",width:"100%"}}>
          {slot1}
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
          <div style={{backgroundColor:"#ddd",width:"100%"}}>
            {slot2}
          </div>
      </div>                        
    </div>

  );
}

export default TwoRightButtonsSection;
