import React from 'react';
import PropTypes from "prop-types";

const Dialog = ({ visible, children }) => {
  return visible ? (
    <div style={{
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: 998,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        zIndex: 999,
        backgroundColor: "#2c2f33",
        maxWidth: "90%",
        maxHeight: "90%",
        minWidth: "300px",
        boxShadow: "0 -2px 3px rgba(0, 0, 0, 1)",
        borderRadius: "4px",
        padding: "16px",
        overflow: "auto"
      }}>
        {children}
      </div>
    </div>
  ) : null;
};
Dialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.element
}

export default Dialog;