import React from "react";
import PropTypes from "prop-types";

function BoardRecord({ record, index }) {
  return (
    <li>
      <div className="collapsible-header">
        <span className="col s1">{index + 1}</span>
        {/* <i className="material-icons">filter_drama</i> */}
        {record.name}
        <span className="col s10" style={{ textAlign: "right", width: "100%" }}>
          {record.prCount}
        </span>
      </div>
      <div className="collapsible-body">
        <span>{record.email}</span>
      </div>
    </li>
  );
}

BoardRecord.propTypes = {
  record: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default BoardRecord;
