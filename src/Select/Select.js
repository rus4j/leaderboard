import React from "react";
import PropTypes from "prop-types";

function Select({ src, label }) {
  return (
    <div className="input-field col s12">
      <select>
        <option defaultValue value="" disabled></option>
        {src.map((value, index) => {
          return <option value={value.key}>{value.key}</option>;
        })}
      </select>
      <label>{label}</label>
    </div>
  );
}

Select.propTypes = {
  src: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
