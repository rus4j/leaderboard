import React from "react";
import { useState } from "react";
import DateSetting from "./DateSetting";
import projects from "../sampleData/projects.json";
import DataSelect from "../Select/DataSelect";
import StashApi from "../StashApi";

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
  const [projectQuery, setProjectQuery] = useState("");

  const { data, loading, hasMore, hasError } = StashApi(projectQuery);

  function updateUrl(e) {
    setProjectQuery(e.target.value + "/rest/api/1.0/projects");
  }

  return (
    <div className="z-depth-1" style={styles.margin}>
      <div className="input-field col s12">
        <input id="last_name" type="text" onChange={updateUrl} />
        <label htmlFor="last_name">Stash URL</label>
        {hasError && (
          <span class="helper-text" data-error="wrong" data-success="right">
            Invalid url
          </span>
        )}
      </div>
      <DataSelect src={data} label="Project" />

      {/* /REST/API/1.0/PROJECTS/{PROJECTKEY}/REPOS/{REPOSITORYSLUG}/BRANCHES?BASE&DETAILS&FILTERTEXT&ORDERBY&BOOSTMATCHES */}
      <DataSelect
        src={[{ key: "dev" }, { key: "master" }, { key: "release" }]}
        label="Branch"
      />

      <DateSetting></DateSetting>

      <div style={styles.clear}></div>
    </div>
  );
}

export default Settings;
