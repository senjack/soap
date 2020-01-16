import React from "react";


function AppTwoRadioInputsGroup1(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id1}>
          <h5>{props.caption} {(props.isRequired && props.isRequired===true)?<span className="mySpan">*</span>:null}</h5>
      </label>
      <div className="app-two-radio-inputs-group-1" style={{height:"auto"}}>
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <input type="radio" id={props.id1} name={props.name} /> {props.caption1}
            </div>
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                <input type="radio" id={props.id2} name={props.name} /> {props.caption2}
            </div>
        </div>
      </div>
      <div id={props.errorId} className="app-two-radio-inputs-group-1-error">
          You must select your gender first!
      </div>
    </div>

  );
}

export default AppTwoRadioInputsGroup1;
