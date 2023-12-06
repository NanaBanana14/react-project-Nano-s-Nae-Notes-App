import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, onUnarchive }) {
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
          onUnarchive={onUnarchive}
          archived={note.archived}
        />
      ))}
    </div>
  );
}


export default NoteList;
