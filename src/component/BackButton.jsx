import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BackButton({ to }) {
  return (
    <Link to={to}>
      <button>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </Link>
  );
}

BackButton.propTypes = {
  to: PropTypes.func,
};

export default BackButton;
