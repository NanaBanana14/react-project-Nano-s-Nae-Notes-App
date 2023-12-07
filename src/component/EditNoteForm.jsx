import React, { useState } from 'react';
import PropTypes from 'prop-types';

function EditNoteForm({ initialNote, onEdit }) {
  const [title, setTitle] = useState(initialNote.title);
  const [body, setBody] = useState(initialNote.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ id: initialNote.id, title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Body:
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

EditNoteForm.propTypes = {
  initialNote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditNoteForm;
