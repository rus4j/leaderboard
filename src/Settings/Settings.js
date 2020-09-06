import React from "react";
import { useState } from "react";
import DateSetting from "./DateSetting";
import projects from "../sampleData/projects.json";
import DataSelect from "../Select/DataSelect";
import StashApi from "../StashApi";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "50%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Settings() {
  const [projectQuery, setProjectQuery] = useState("");

  const { data, loading, hasMore, hasError } = StashApi(projectQuery);

  function updateUrl(e) {
    setProjectQuery(e.target.value + "/rest/api/1.0/projects");
  }

  const classes = useStyles();

  return (
    <div className="z-depth-1" style={styles.margin}>
      <FormControl className={classes.formControl}>
        <TextField
          id="stash-url"
          label="Stash URL"
          helperText={hasError && "Invalid URL"}
          onChange={updateUrl}
        />
      </FormControl>

      <FormControl className={classes.formControl}>
        <DataSelect src={data} label="Project" />
      </FormControl>

      {/* /REST/API/1.0/PROJECTS/{PROJECTKEY}/REPOS/{REPOSITORYSLUG}/BRANCHES?BASE&DETAILS&FILTERTEXT&ORDERBY&BOOSTMATCHES */}
      <FormControl className={classes.formControl}>
        <DataSelect
          src={[{ key: "dev" }, { key: "master" }, { key: "release" }]}
          label="Branch"
        />
      </FormControl>

      <DateSetting></DateSetting>

      <div style={styles.clear}></div>
    </div>
  );
}

export default Settings;
