import React from 'react';
import PropTypes from "prop-types";

const Card = ({ children, isLink = false }) => {
  return isLink
    ? <a className="card">{children}</a>
    : <div className="card">{children}</div>;
};
Card.propTypes = {
  children: PropTypes.element,
  isLink: PropTypes.bool
};

export default Card;