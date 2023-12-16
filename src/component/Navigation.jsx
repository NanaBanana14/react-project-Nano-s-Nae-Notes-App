import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPenToSquare, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons';
import { FiLogOut } from 'react-icons/fi';
import ToggleTheme from './ToggleTheme';

function Navigation({ logout, name }) {
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
          <Link to="*">
            <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} />
          </Link>
        </li>
        <li><button onClick={logout}>{name} <FiLogOut /></button></li>
        <li><ToggleTheme /></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
