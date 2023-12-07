import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ id, title, body, createdAt, onDelete, onArchive, onUnarchive, archived }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? (
          <ArchiveButton id={id} onUnarchive={onUnarchive} />
        ) : (
          <button className="note-item__archive-button" onClick={() => onArchive(id)}>
            Archive
          </button>
        )}
      </div>
    </div>
  );
}

export default NoteItem;
