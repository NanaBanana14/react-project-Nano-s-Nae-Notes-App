import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NoteInput from '../component/NoteInput';
import { getAllNotes, addNote } from '../utils/index';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const [notes, setNotes] = useState(getAllNotes());
  const navigate = useNavigate();

  const updateNotes = () => {
    setNotes(getAllNotes());
  };

  const onAddNoteHandler = ({ title, body }) => {
    addNote({ title, body });
    updateNotes();
    navigate('/');
  };

  return (
    <div className="note-app__body">
      <h1 className="note-app__header">Add Your Note</h1>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}

AddPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default AddPage;
