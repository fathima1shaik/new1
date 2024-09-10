import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';

function Nav() {
  const location = useLocation(); // Get the current route
  const [activeLink, setActiveLink] = useState(location.pathname); // Initialize with current route

  // Function to handle link click
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div>
      <div className="header">
        <ul>
          <Link
            to="/"
            className={`Ho${activeLink === '/' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/')}
            style={{ color: 'black' }}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className={`Home ${activeLink === '/about' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/about')}
            style={{ color: 'black' }}
          >
            <li>About</li>
          </Link>
          <Link
            to="/contact"
            className={`Home ${activeLink === '/contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/contact')}
            style={{ color: 'black' }}
          >
            <li>Contact</li>
          </Link>
          <Link
            to="/Team"
            className={`Home ${activeLink === '/Team' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/Team')}
            style={{ color: 'black' }}
          >
            <li>Team</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
