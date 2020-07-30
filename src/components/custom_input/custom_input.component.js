import React from 'react';

function CustomInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        className="form-control"
        type={props.type}
        required
        aria-describedby={props.description}
        placeholder={props.placeholder}
        onChange={props.onEmailInput}
      />
      <br />
    </div>
  );
}

export default CustomInput;
