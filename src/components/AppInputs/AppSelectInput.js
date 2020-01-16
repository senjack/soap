import React from "react";


function AppSelectInput(props) {
  return (
    <div className="form-group" style={props.style}>
      <label htmlFor={props.id}>
          <h5>{props.labelCaption}
            {props.isRequired & props.isRequired === true ? <span className="mySpan">*</span>:null}
          </h5>
      </label>
      <select
          // type="text"
          className="app-select-input-1"
          id={props.id}
          name={props.name}
          // placeholder={props.placeHolder}
      >
        {props.children}
      </select>
      <div id={props.errorId} className="app-select-input-1-error">
          This field is required!
      </div>
    </div>
  );
}

export default AppSelectInput;
