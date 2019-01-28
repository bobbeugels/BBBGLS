/* global window document */
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import classnames from 'classnames';
import App from './App';

class AppRouter extends PureComponent {
  state = {
    portrait: false,
  };

  componentDidMount() {
    this.viewportOrientation();
    window.addEventListener('resize', this.viewportOrientation);
  }

  viewportOrientation = () => {
    const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({ portrait: h > w });
  };

  render() {
    const { portrait } = this.state;
    return (
      <div
        className={classnames('device-wrapper', {
          portrait: portrait && !isMobile,
          landscape: !portrait,
          mobile: isMobile,
        })}
      >
        <Router>
          <Route path="/BBBGLS/" component={App} />
        </Router>
      </div>
    );
  }
}


export default AppRouter;
