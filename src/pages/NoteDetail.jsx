import React from 'react';
import { useParams, Link } from 'react-router-dom';
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

export default NoteDetail;
