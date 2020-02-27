import React from "react";
import Avatar from '@material-ui/core/Avatar';

function ProfileSection(props) {
  return (
    <div>
        <div className={(props.PartnerDrawerPhoto && props.PartnerDrawerPhoto.show === true)? "drawer-profile-wrapper":null} style={(props.PartnerDrawerPhoto && props.PartnerDrawerPhoto.show === true)?{  backgroundImage:  `url(${props.PartnerDrawerPhoto.photoURL})`}:null}>
          <div className="col-sm-12" style={{paddingTop:"15px",textAlign:"center"}}>
            <center>
              <div style={{height:"150px",width:"150px",borderRadius:"150px",border:"6px solid rgb(228,108,10)",backgroundColor:"#f9f9f9"}}>
                <Avatar style={{width:"100%",height:"100%"}} alt={props.userName} src={props.profilePicture}/>
              </div>
            </center>
          </div>
          <div className="col-sm-12" style={{paddingTop:"10px",textAlign:"center",textShadow: "1px 1px #000",textTransform:"capitalize",}}>
            <center>
              <div>
                <h5>{props.userName}</h5>
              </div>
            </center>
          </div>
          <div className="col-sm-12" style={{paddingTop:"5px",textAlign:"center",textShadow: "1px 1px #000",textTransform:"lowerCase",}}>
            <center>
              <div>
                <h5>{props.userEmail}</h5>
              </div>
            </center>
          </div>
          <div className="col-sm-12" style={{paddingTop:"5px",textAlign:"center",textShadow: "1px 1px #000",textTransform:"upperCase",}}>
            <center>
              <div>
                <h6>{props.userId}</h6>
              </div>
            </center>
          </div>
        </div>
    </div>
  );
}

export default ProfileSection;
