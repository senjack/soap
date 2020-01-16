import React from "react";
import FileUploadButton1 from "../AppButtons/ApplicationFormButtons/FileUploadButton1";

function AppImageInputGroup1(props) {
  return (
    <div style={{width:"100%"}}>
    <div className="form-group">
        <center>
          <label htmlFor={props.id}>
            <h5>{props.caption}</h5>
          </label>
        </center>
        <div style={{textAlign:"center",width:"100%",marginTop:"-8px"}}
        >
            <div style={{textAlign:"center",width:"100%"}}
                className="app-image-input-group1"
                id={props.id}
            >
                <img src={props.src} 
                style={{backgroundColor:"#ddd",border:"1px solid #aaa",height:"155px",width:"150px",marginLeft:"-12px"}}/>
            </div>
            <div className="photo-error" id ={props.errorId}>
                Upload your photo!
            </div>

            <div style={{textAlign:"center",width:"100%"}}
            >
              <FileUploadButton1 customStyle={{width:"150px",height:"30px",marginLeft:"-12px",marginTop:"6px",padding:"0px",borderRadius:"0px",textTransform:"capitalize"}}/>
            </div>
        </div>
    </div>

</div>
);
}

export default AppImageInputGroup1;
