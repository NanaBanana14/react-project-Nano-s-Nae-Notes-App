import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPenToSquare, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} style={{ color: "#ffffff" }} />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} />
          </Link>
        </li>
        <li>
          <Link to="/archive">
            <FontAwesomeIcon icon={faBoxArchive} style={{ color: "#ffffff" }} />
          </Link>
        </li>
        <li>
          <Link to="/nonexistent-page">
            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
