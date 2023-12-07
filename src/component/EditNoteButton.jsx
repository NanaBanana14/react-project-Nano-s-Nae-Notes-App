import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function EditNoteButton({ id }) {
  return (
    <Link to={`/edit/${id}`}>
      <button className="note-item__edit-button">
        <FontAwesomeIcon icon={faUserPen} />
      </button>
    </Link>
  );
}

EditNoteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditNoteButton;
