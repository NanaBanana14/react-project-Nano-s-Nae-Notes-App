import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function DetailButton({ id }) {
  return (
    <Link to={`/note/${id}`}>
      <button className="note-item__detail-button">
        <FontAwesomeIcon icon={faEye} />
      </button>
    </Link>
  );
}

DetailButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailButton;
