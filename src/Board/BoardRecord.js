import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StarRateIcon from '@material-ui/icons/StarRate'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function BoardRecord({ record, index }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <StarRateIcon></StarRateIcon>
          {/* {index + 1} */}
        </ListItemIcon>
        <ListItemText primary={record.name} secondary={'number of pull requests ' + record.prCount} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={record.email} />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
}

BoardRecord.propTypes = {
  record: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default BoardRecord;
