import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/destructuring-assignment
const B = props => <span className="bold">{props.children}</span>;

B.propTypes = {
  children: PropTypes.node.isRequired,
};

export default B;
