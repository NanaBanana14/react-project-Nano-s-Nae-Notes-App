// NoteItem.js
import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import DetailButton from './DetailButton';

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
        <DetailButton id={id} />
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
};


export default NoteItem;
