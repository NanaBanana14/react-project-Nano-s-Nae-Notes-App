import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton'; // Import komponen ArchiveButton

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <ArchiveButton id={id} onArchive={onArchive} />
        ) : (
          <button className="note-item__archive-button" onClick={() => onArchive(id)}>
            Arsip
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteItem;
