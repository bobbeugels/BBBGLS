import React from 'react';
import PropTypes from 'prop-types';
import './Block.scss';
import Text from './Text';

export default function Block(props) {
  const { children, name, reference } = props;

  return (
    <div className={`Block ${name}`} ref={reference}>
      {children}
    </div>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  reference: PropTypes.shape({}),
};

Block.defaultProps = {
  children: null,
  reference: null,
};

Block.Text = Text;
