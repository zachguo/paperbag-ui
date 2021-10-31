import React from 'react';
import PropTypes from "prop-types";

const Dialog = ({ visible, children }) => {
  return visible ? (
    <div className="dialog-wrapper">
      <div className="dialog">
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