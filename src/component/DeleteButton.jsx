import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DeleteButton({ id, onDelete }) {
  return (
    <button className='note-item__delete-button' onClick={() => onDelete(id)}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
}

export default DeleteButton;
