import React from 'react';
import PropTypes from 'prop-types';

export default function Text(props) {
  const { title, children } = props;

  return (
    <div className="text-section">
      <span className="text-section-title">{title}</span>
      {children}
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
