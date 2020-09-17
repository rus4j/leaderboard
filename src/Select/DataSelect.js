import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const styles = (theme) => ({
  input: {
    color: theme.palette.common.white,
    fontSize: 14,
    "&:before": {
      borderBottom: `1px solid ${"grey"} !important`,
    },
    marginBottom: 15,
  },
  labelText: {
    color: "grey",
    fontSize: 14,
  },
});

function DataSelect(props) {
  const { classes, src, label } = props;
  return (
    <>
      <InputLabel id="select-label" className={classes.labelText}>
        {label}
      </InputLabel>
      <Select
        labelId="select-label"
        className={classes.input}
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

export default withStyles(styles)(DataSelect);
