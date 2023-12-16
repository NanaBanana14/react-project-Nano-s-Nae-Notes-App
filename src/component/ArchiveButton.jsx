import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

function ArchiveButton({ id, onUnarchive }) {
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <button className="note-item__archive-button" onClick={() => onUnarchive(id)}>
          {locale === 'id' ? 'Batal Arsip' : 'Unarchive'}
        </button>
      )}
    </LocaleConsumer>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
