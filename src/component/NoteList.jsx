import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          onDelete={onDelete}
          onArchive={onArchive}
          archived={note.archived}
        />
      ))}
    </div>
  );
}

export default NoteList;
