import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filteredNotes: null,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    const updatedFilteredNotes = this.state.filteredNotes ? this.state.filteredNotes.filter((note) => note.id !== id) : null;

    this.setState({
      notes: updatedNotes,
      filteredNotes: updatedFilteredNotes,
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
  
      return {
        notes: [...prevState.notes, newNote],
        filteredNotes: prevState.filteredNotes ? [...prevState.filteredNotes, newNote] : null,
      };
    });
  }
  

  onSearchHandler(keyword) {
    const filteredNotes = this.state.notes.filter(
      (note) => note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    this.setState({ filteredNotes });
  }

  onArchiveHandler(id) {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
  
    const updatedFilteredNotes = this.state.filteredNotes
      ? this.state.filteredNotes.map((note) =>
          note.id === id ? { ...note, archived: !note.archived } : note
        )
      : null;
  
    this.setState({
      notes: updatedNotes,
      filteredNotes: updatedFilteredNotes || updatedNotes,
    });
  }
  

  render() {
    const { filteredNotes, notes } = this.state;
    const activeNotes = filteredNotes ? filteredNotes.filter(note => !note.archived) : notes;
    const archivedNotes = filteredNotes ? filteredNotes.filter(note => note.archived) : [];

    return (
      <div className="note-app__body">
        <h1 className="note-app__header">My Notes List</h1>
        <h2>Add Notes</h2>
        <NoteInput addNote={this.onAddNoteHandler} />
        <h2>Search Notes</h2>
        <input
          type="text"
          placeholder="Search by title"
          onChange={(e) => this.onSearchHandler(e.target.value)}
        />
        <h2>Notes List</h2>
        <NoteList
          notes={activeNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
        <h2>Archived Note</h2>
        <NoteList
          notes={archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </div>
    );
  }
}

export default NoteApp;
