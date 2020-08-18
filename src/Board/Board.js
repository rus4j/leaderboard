import React from "react";
import PropTypes from "prop-types";
import BoardRecord from "./BoardRecord";

const styles = {
  margin: {
    marginTop: "10px",
    marginRight: "0px",
    marginLeft: "20px",
  },
};

function Board(props) {
  return (
    <div style={styles.margin}>
      <ul className="collapsible expandable">
        {props.records.map((record, i) => {
          return <BoardRecord record={record} key={i} index={i} />;
        })}
      </ul>
    </div>
  );
}

Board.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Board;
