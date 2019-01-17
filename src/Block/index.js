import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Block.scss';
import Text from './Text';

export default class Block extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    reference: PropTypes.shape({}),
  };

  static defaultProps = {
    children: null,
    reference: null,
  };

  static Text = Text;

  render() {
    const { children, name, reference } = this.props;
    return (
      <div className={`Block ${name}`} ref={reference}>
        {children}
      </div>
    );
  }
}
