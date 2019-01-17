import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Text extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { children, title } = this.props;
    return (
      <div className="text-section">
        <span className="text-section-title">{title}</span>
        {children}
      </div>
    );
  }
}
