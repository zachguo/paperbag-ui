import React from "react";
import PropTypes from "prop-types";

const Tagline = ({ children }) => (
  <blockquote className="tagline">
    {children}
  </blockquote>
);
Tagline.propTypes = {
  children: PropTypes.element
};

export default Tagline;