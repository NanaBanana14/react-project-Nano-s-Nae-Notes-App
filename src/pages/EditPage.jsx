import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote, editNote } from '../utils/index';
import EditNoteForm from '../components/EditNoteForm';

function EditPage() {
  const { id } = useParams();
  const note = getNote(id);

  const handleEdit = (updatedNote) => {
    editNote(updatedNote);
    window.location.href = '/';
  };

  if (!note) {
    return <p>Note not found.</p>;
  }

  return (
    <div className="edit-page">
      <h1>Edit Note</h1>
      <EditNoteForm initialNote={note} onEdit={handleEdit} />
    </div>
  );
}

export default EditPage;
