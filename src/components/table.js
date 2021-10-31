import React from "react";
import PropTypes from "prop-types";

const Table = ({ columns, data, reorientable = false, hideHeader = false }) => {
  return (
    <table className={`table ${reorientable ? "reorientable" : ""}`}>
      <thead className="thead" style={{ display: hideHeader ? "none" : undefined }}>
        <tr className="tr">
          {columns.map((h, hi) => <th key={hi} className="th">{h.label}</th>)}
        </tr>
      </thead>
      <tbody className="tbody">
        {data.map((d, di) => (
          <tr key={d.key || di} id={d.key} className="tr">
            {columns.map((c, ci) => (
              <td key={ci} data-label={c.label} className="td" style={{ minWidth: c.minWidth }}>
                {c.render ? c.render(d[c.index], d) : d[c.index]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    minWidth: PropTypes.number,
    render: PropTypes.func// (any, Row?) => ReactElement | string
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string
  })).isRequired,
  reorientable: PropTypes.bool,
  hideHeader: PropTypes.bool
};

export default Table;