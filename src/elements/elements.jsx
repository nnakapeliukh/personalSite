import React from 'react';
import './elements.css';

export default function Menu() {
  return (
    <div className="collapsible-menu">
      <input type="checkbox" id="menuID" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="menuID" />
      <div className="menu-content">
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Option 1</li>
          <li>Option 2</li>
        </ul>
      </div>
    </div>
  );
}
