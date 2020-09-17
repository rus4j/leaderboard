import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import StashApi from "../StashApi";
import DataSelect from "../Select/DataSelect";
import DateSetting from "../Settings/DateSetting";

const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)",
    },
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  input: {
    color: theme.palette.common.white,
    fontSize: 14,
    "&:before": {
      borderBottom: `1px solid ${"grey"} !important`,
    },
  },
  labelText: {
    color: "grey",
    fontSize: 14,
  },
  helperText: {
    color: "grey",
    fontSize: 10,
  },
  formControl: {
    minWidth: "72%",
  },
  itemPrimary: {
    fontSize: "inherit",
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});

function Navigator(props) {
  const { classes, ...other } = props;

  const [projectQuery, setProjectQuery] = useState("");

  const { data, loading, hasMore, hasError } = StashApi(projectQuery);

  function updateUrl(e) {
    setProjectQuery(e.target.value + "/rest/api/1.0/projects");
  }

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          LeaderBoard
        </ListItem>
        <ListItem className={clsx(classes.item, classes.itemCategory)}>
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
            }}
          >
            Project Overview
          </ListItemText>
        </ListItem>
        <ListItem className={classes.categoryHeader}>
          <ListItemText classes={{ primary: classes.categoryHeaderPrimary }}>
            Source
          </ListItemText>
        </ListItem>

        <ListItem className={clsx(classes.item)}>
          <ListItemIcon className={classes.itemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <TextField
            id="stash-url"
            label="Stash URL"
            helperText={hasError && "Invalid URL"}
            onChange={updateUrl}
            InputProps={{ className: classes.input }}
            InputLabelProps={{ className: classes.labelText }}
            FormHelperTextProps={{ className: classes.helperText }}
          />
        </ListItem>

        <ListItem className={clsx(classes.item)}>
          <ListItemIcon className={classes.itemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <FormControl className={classes.formControl}>
            <DataSelect src={data} label="Project" />
          </FormControl>
        </ListItem>

        <ListItem className={clsx(classes.item)}>
          <ListItemIcon className={classes.itemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          {/* /REST/API/1.0/PROJECTS/{PROJECTKEY}/REPOS/{REPOSITORYSLUG}/BRANCHES?BASE&DETAILS&FILTERTEXT&ORDERBY&BOOSTMATCHES */}
          <FormControl className={classes.formControl}>
            <DataSelect
              src={[{ key: "dev" }, { key: "master" }, { key: "release" }]}
              label="Branch"
            />
          </FormControl>
        </ListItem>

        <Divider className={classes.divider} />

        <ListItem className={classes.categoryHeader}>
          <ListItemText classes={{ primary: classes.categoryHeaderPrimary }}>
            Date
          </ListItemText>
        </ListItem>

        <ListItem className={clsx(classes.item)}>
          <ListItemIcon className={classes.itemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <DateSetting></DateSetting>
        </ListItem>
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
