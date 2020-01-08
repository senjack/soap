import React from "react";

function AppFooter() {
  return (
    <div>
      <div style={{marginTop:"50px",paddingTop:"30px",borderTop:"1px solid #ddd",textAlign:"center",color:"#bbb",textShadow: "1px 1px #fff"}}>
        <p>Refactory SOAP | Designed and Maintained by the Refactory Technical Department</p>
  <p>All Rights Reserved | @Refactory.ug | {`${((new Date()).getFullYear()).toString()}`}</p>
      </div>
    </div>
  );
}

export default AppFooter;
