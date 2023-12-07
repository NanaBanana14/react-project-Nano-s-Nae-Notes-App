import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getNote, showFormattedDate } from '../utils';

function NoteDetail() {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) {
    return <p>Note not found</p>;
  }

  return (
    <div>
      <h1>{note.title}</h1>
      <p>Created on {showFormattedDate(note.createdAt)}</p>
      <p>{note.body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
  id: PropTypes.string,
};

export default NoteDetail;
