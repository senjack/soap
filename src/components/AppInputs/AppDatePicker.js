import React from "react";

function AppDatePicker(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>
          <h5>{props.caption}
            {props.isRequired & props.isRequired === true ? <span className="mySpan">*</span>:null}
          </h5>
      </label>
      <input
          type="date"
          className="app-date-picker"
          id={props.id}
          name={props.name}
      />
      <div id={props.errorId} className="date-error">
        You must select your date of birth first!
      </div>
    </div>
  );
}

export default AppDatePicker;