import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { getNote } from '../utils/api';

function DetailButton({ id }) {
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return null;
  }

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
