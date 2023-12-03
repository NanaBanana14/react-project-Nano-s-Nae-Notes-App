import React from 'react';

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      Archived
    </button>
  );
}

export default ArchiveButton;
