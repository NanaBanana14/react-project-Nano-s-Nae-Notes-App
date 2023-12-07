import React from 'react';
import { Link } from 'react-router-dom';
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

export default BackButton;
