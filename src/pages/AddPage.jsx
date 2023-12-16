import React from 'react';
import PropTypes from 'prop-types';
import NoteInput from '../component/NoteInput';
import { addNote } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { LocaleConsumer } from '../contexts/LocaleContext';

function AddPage() {
  const navigate = useNavigate();

  const onAddNoteHandler = async ({ title, body }) => {
    try {
      await addNote({ title, body });
      navigate('/');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <div className="note-app__body">
          <h1 className="note-app__header">{locale === 'id' ? 'Tambahkan Notemu' : 'Add Your Note'}</h1>
          <NoteInput addNote={onAddNoteHandler} />
        </div>
      )}
    </LocaleConsumer>
  );
}

AddPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default AddPage;
