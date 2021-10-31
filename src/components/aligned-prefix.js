import React from "react";
import PropTypes from "prop-types";

const AlignedPrefix = ({ prefix, children, cssMode = "flexbox", prefixWidth, style }) => {
  return cssMode === "table"
    ? (
      <div className="aligned-prefix-table" style={style}>
        <div>
          <div style={{ width: prefixWidth }}>{prefix}</div>
          <div>{children}</div>
        </div>
      </div>
    )
    : (
      <div className="aligned-prefix-flexbox">
        <div>{prefix}</div>
        <div>{children}</div>
      </div >
    );
};
AlignedPrefix.propTypes = {
  prefix: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  cssMode: PropTypes.oneOf(["flexbox", "table"]),
  prefixWidth: PropTypes.number,
  style: PropTypes.object
};

export default AlignedPrefix;