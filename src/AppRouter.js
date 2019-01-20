import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import App from './App';

const AppRouter = () => (
  <div className={`device-wrapper${isMobile ? ' mobile' : ''}`}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </div>
);

export default AppRouter;
