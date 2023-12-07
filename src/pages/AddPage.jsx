import React from 'react';
import NoteInput from '../component/NoteInput';
import { getAllNotes, addNote } from '../utils/index';

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      filteredNotes: null,
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.updateNotes = this.updateNotes.bind(this); // Tambahkan pengikatan untuk updateNotes
  }

  onAddNoteHandler({ title, body }) {
    addNote({ title, body });
    this.updateNotes();
  }

  updateNotes() {
    this.setState({
      notes: getAllNotes(),
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <h1 className="note-app__header">Add Your Note</h1>
        <NoteInput addNote={this.onAddNoteHandler} />
      </div>
    );
  }
}

export default AddPage;
