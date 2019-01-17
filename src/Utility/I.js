import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/destructuring-assignment
const I = props => <span className="italic">{props.children}</span>;

I.propTypes = {
  children: PropTypes.node.isRequired,
};

export default I;
