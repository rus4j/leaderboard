import React from "react";
import PropTypes from "prop-types";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

function DataSelect({ src, label }) {
  return (
    <>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        // value={value}
        // onChange={handleChange}
      >
        {src.map((value, index) => {
          return (
            <MenuItem key={index} value={value.key}>
              {value.key}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
}

DataSelect.propTypes = {
  src: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
};

export default DataSelect;
