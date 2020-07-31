import React from 'react';

import './custom_input.css';

function CustomInput(props) {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input
        className="form-control rounded-input"
        type={props.type}
        required
        aria-describedby={props.description}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <br />
    </div>
  );
}

export default CustomInput;
