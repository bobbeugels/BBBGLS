import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  const [hoveringOnLastItem, hoverHandler] = useState(false);

  return (
    <div className="Navigation">
      <div className="logo">
        BBBGLS
      </div>
      <ul>
        <li><Link to="/BBBGLS/">About me</Link></li>
        <li><Link to="/BBBGLS/abilities">Abilities</Link></li>
        <li><Link to="/BBBGLS/work">Work</Link></li>
        <li className={hoveringOnLastItem ? 'hover' : ''}>
          <Link to="/BBBGLS/education">Education</Link>
        </li>
        <li
          onMouseEnter={() => hoverHandler(true)}
          onMouseLeave={() => hoverHandler(false)}
        >
          <Link to="/BBBGLS/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
