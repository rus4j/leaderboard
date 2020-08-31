import React from "react";
import DateSetting from "./DateSetting";
import projects from "../sampleData/projects.json"; // /REST/API/1.0/PROJECTS?NAME&PERMISSION
import Select from "../Select/Select";

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
      <Select src={projects.values} label="Project" />

      {/* /REST/API/1.0/PROJECTS/{PROJECTKEY}/REPOS/{REPOSITORYSLUG}/BRANCHES?BASE&DETAILS&FILTERTEXT&ORDERBY&BOOSTMATCHES */}
      <Select
        src={[{ key: "dev" }, { key: "master" }, { key: "release" }]}
        label="Branch"
      />

      <DateSetting></DateSetting>

      <div style={styles.clear}></div>
    </div>
  );
}

export default Settings;
