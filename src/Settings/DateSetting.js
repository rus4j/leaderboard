import React from "react";

const styles = {
  margin: {
    marginRight: "10px",
    marginLeft: "10px",
  },
};

function DateSetting() {
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

      <div className="input-field col s6">
        <input id="date_from" type="text" className="datepicker"></input>
        <label htmlFor="date_from">From</label>
      </div>
      <div className="input-field col s6">
        <input id="date_to" type="text" className="datepicker"></input>
        <label htmlFor="date_to">To</label>
      </div>
    </div>
  );
}

export default DateSetting;
