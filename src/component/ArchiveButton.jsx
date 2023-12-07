import React from 'react';
import PropTypes from 'prop-types';

function ArchiveButton({ id, onUnarchive }) { // Change onArchive to onUnarchive
  return (
    <button className="note-item__archive-button" onClick={() => onUnarchive(id)}>
      Unarchive
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
