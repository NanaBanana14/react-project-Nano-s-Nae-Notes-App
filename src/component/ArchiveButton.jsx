import React from 'react';

function ArchiveButton({ id, onUnarchive }) { // Change onArchive to onUnarchive
  return (
    <button className="note-item__archive-button" onClick={() => onUnarchive(id)}>
      Unarchive
    </button>
  );
}

export default ArchiveButton;
