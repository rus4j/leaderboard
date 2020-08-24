import React from "react";
import DateSetting from "./DateSetting";
import projects from "../sampleData/projects.json"; // /REST/API/1.0/PROJECTS?NAME&PERMISSION

const styles = {
  margin: {
    marginTop: "10px",
    marginRight: "10px",
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
          {projects.values.map((value, index) => {
            return <option value={value.key}>{value.key}</option>;
          })}
        </select>
        <label>Project</label>
      </div>

      {/* /REST/API/1.0/PROJECTS/{PROJECTKEY}/REPOS/{REPOSITORYSLUG}/BRANCHES?BASE&DETAILS&FILTERTEXT&ORDERBY&BOOSTMATCHES */}
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
