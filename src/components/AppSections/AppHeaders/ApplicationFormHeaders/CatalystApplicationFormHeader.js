import React from "react";
import BadgeAlignment from '../../../AppBadges/BadgeAlignment';


function CatalystApplicationFormHeader(props) {
  return (
    <div className="row">
      <div className="col-xl-12">
          <div className="application-form-Header">
              <h4>
                  <span>
                    <BadgeAlignment badgeContent={props.badgeNumber}/>
                  </span>
                  <span>
                    {props.heading}
                  </span>

              </h4>
          </div>
          <div id="general-error" className="general-error">
              {"Failed : All fields are required!"}
          </div>
      </div>
    </div>

  );
}

export default CatalystApplicationFormHeader;
