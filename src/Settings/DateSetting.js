import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const styles = {
  margin: {
    marginRight: "10px",
    marginLeft: "10px",
  },
};

function DateSetting() {
  const [fromDate, setFromDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [toDate, setToDate] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleFromDateChange = (date) => {
    setFromDate(date);
  };

  const handleToDateChange = (date) => {
    setToDate(date);
  };

  return (
    <div>
      <div>
        <a
          href="/#"
          className="waves-effect btn-small light-blue"
          style={styles.margin}
        >
          Month
        </a>
        <a
          href="/#"
          className="waves-effect btn-small light-blue"
          style={styles.margin}
        >
          Week
        </a>
        <a
          href="/#"
          className="waves-effect btn-small light-blue"
          style={styles.margin}
        >
          Day
        </a>
      </div>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="From"
          value={fromDate}
          onChange={handleFromDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="To"
          value={toDate}
          onChange={handleToDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DateSetting;
