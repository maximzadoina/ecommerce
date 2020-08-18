import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange,type, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" type={type} onChange={handleChange} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : null
        } form-input-label`}
    >{label}</label>
    ) : null}
  </div>
);
export default FormInput; 