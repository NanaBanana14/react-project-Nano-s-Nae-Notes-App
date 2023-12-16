import React from 'react';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <button className="toggle-theme-button" onClick={toggleTheme}>
          {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
      )}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
