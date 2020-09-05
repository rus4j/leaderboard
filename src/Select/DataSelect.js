import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "50%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function DataSelect({ src, label }) {
  const classes = useStyles();
  return (
    <div className="input-field col s12">
      <FormControl className={classes.formControl}>
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
      </FormControl>
    </div>
  );
}

DataSelect.propTypes = {
  src: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
};

export default DataSelect;
