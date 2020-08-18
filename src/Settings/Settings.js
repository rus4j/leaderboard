import React from "react";
import DateSetting from "./DateSetting";

const styles = {
  margin: {
    marginTop: "10px",
    marginRight: "20px",
    marginLeft: "0px",
    padding: "10px",
  },
  clear: {
    clear: "both",
  },
};

function Settings() {
  return (
    <div className="z-depth-1" style={styles.margin}>
      <div className="input-field col s12">
        <input id="last_name" type="text" />
        <label htmlFor="last_name">Stash URL</label>
      </div>
      <div className="input-field col s12">
        <select>
          <option defaultValue value="" disabled></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Project</label>
      </div>
      <div className="input-field col s12">
        <select>
          <option defaultValue value="" disabled></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Branch</label>
      </div>

      <DateSetting></DateSetting>

      <div style={styles.clear}></div>
    </div>
  );
}

export default Settings;
