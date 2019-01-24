import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default class Navigation extends PureComponent {
  state = {
    hoveringOnLastItem: false,
  };

  hoverHandler = (value) => {
    this.setState({ hoveringOnLastItem: value });
  };

  render() {
    const { hoveringOnLastItem } = this.state;

    return (
      <div className="Navigation">
        <div className="logo">
          BBBGLS
        </div>
        <ul>
          <li>
            <Link to="/">About me</Link>
          </li>
          <li>
            <Link to="/abilities">Abilities</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li className={hoveringOnLastItem ? 'hover' : ''}>
            <Link to="/education">Education</Link>
          </li>
          <li
            onMouseEnter={() => this.hoverHandler(true)}
            onMouseLeave={() => this.hoverHandler(false)}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}
