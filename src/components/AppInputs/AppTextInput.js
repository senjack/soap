import React from "react";


function AppTextInput(props) {
  return (
    <div className="form-group" style={props.style}>
      <label htmlFor={props.id}>
          <h5>{props.labelCaption}
            {props.isRequired & props.isRequired === true ? <span className="mySpan">*</span>:null}
          </h5>
      </label>
      <input
          type="text"
          className="app-text-input-1"
          id={props.id}
          name={props.name}
          placeholder={props.placeHolder}
      />
      <div id={props.errorId} className="app-text-input-1-error">
          This field is required!
      </div>
    </div>
  );
}

export default AppTextInput;
