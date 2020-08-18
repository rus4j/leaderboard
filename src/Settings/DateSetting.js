import React from "react";

function DateSetting() {
  return (
    <div>
      <div>
        <a href="/#" className="waves-effect btn-small light-blue">
          Month
        </a>
        <a href="/#" className="waves-effect btn-small light-blue">
          Week
        </a>
        <a href="/#" className="waves-effect btn-small light-blue">
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
