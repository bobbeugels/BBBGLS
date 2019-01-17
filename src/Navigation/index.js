/* global window document */
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default class Navigation extends PureComponent {

  state = {
    scrollPosition: 0,
    maxScrollValue: 0,
    maxScrollbarValue: 0,
    hoveringOnLastItem: false,
  };

  constructor(props) {
    super(props);
    this.scrollbar = React.createRef();
  }

  componentDidMount() {
    this.updateWindowSizes();

    window.addEventListener('resize', this.updateWindowSizes);
    window.addEventListener('scroll', this.calculateScrollbarPosition);
  }

  hoverHandler = (value) => {
    // antecedent
    this.setState({ hoveringOnLastItem: value });
  };

  calculateScrollbarPosition = () => {
    const { maxScrollValue, maxScrollbarValue } = this.state;
    const posX = window.scrollX;
    const scrollPercentage = posX / maxScrollValue;
    const scrollPosition = scrollPercentage * maxScrollbarValue;
    this.setState({ scrollPosition });
  };

  updateWindowSizes = () => {
    const viewPortWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const maxScrollValue = document.body.scrollWidth - viewPortWidth;
    const maxScrollbarValue = viewPortWidth - this.scrollbar.current.offsetWidth;
    this.setState({ maxScrollValue, maxScrollbarValue });
  };

  render() {
    const { scrollPosition, hoveringOnLastItem } = this.state;

    return (
      <div className="Navigation">
        <div
          className="scrollbar"
          ref={this.scrollbar}
          style={{ left: scrollPosition }}
        />
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
