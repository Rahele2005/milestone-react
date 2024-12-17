/*
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Notifications</li>
          <li>Messages</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
*/
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
