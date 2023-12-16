import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPenToSquare, faBoxArchive, faUser } from '@fortawesome/free-solid-svg-icons';
import { FiLogOut } from 'react-icons/fi';
import ToggleTheme from './ToggleTheme';
import { LocaleConsumer } from '../contexts/LocaleContext';

function Navigation({ logout, name }) {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => (
        <nav className="navigation">
          <ul>
            <li><button className="locale-button" onClick={toggleLocale}>{locale === 'id' ? 'en' : 'id'}</button></li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link to="/add">
                <FontAwesomeIcon icon={faPenToSquare} className="nav-icon" />
              </Link>
            </li>
            <li>
              <Link to="/archive">
                <FontAwesomeIcon icon={faBoxArchive} className="nav-icon" />
              </Link>
            </li>
            <li className="user-icon-container">
              <Link to="*">
                <div>
                  <FontAwesomeIcon icon={faUser} className="nav-icon" />
                  <span className="user-name">{name}</span>
                </div>
              </Link>
            </li>
            <li><button onClick={logout} className="logout-button"> <FiLogOut /></button></li>
            <li><ToggleTheme /></li>
          </ul>
        </nav>
      )}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
