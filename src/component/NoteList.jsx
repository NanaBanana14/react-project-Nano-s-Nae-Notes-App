// NoteList.js
import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, onUnarchive }) {

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id}>
          <NoteItem
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
            archived={note.archived}
          />
        </div>
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default NoteList;
