import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import SearchBar from './SearchBar';
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
  deleteNote,
  editNote,
  getNote,
  archiveNote,
  unarchiveNote,
  addNote,
} from '../utils/index';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      filteredNotes: null,
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.updateNotes();
  }

  onAddNoteHandler({ title, body }) {
    addNote({ title, body });
    this.updateNotes();
  }

  onSearchHandler(keyword) {
    const filteredNotes = getAllNotes().filter(
      (note) => note.title.toLowerCase().includes(keyword.toLowerCase())
    );

    this.setState({ filteredNotes });
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.updateNotes();
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.updateNotes();
  }

  updateNotes() {
    this.setState({
      notes: getAllNotes(),
      filteredNotes: null,
    });
  }

  render() {
    const { filteredNotes, notes } = this.state;
    const activeNotes = filteredNotes ? filteredNotes.filter(note => !note.archived) : getActiveNotes();
    const archivedNotes = filteredNotes ? filteredNotes.filter(note => note.archived) : getArchivedNotes();

    return (
      <div className="note-app__body">
        <h1 className="note-app__header">My Notes List</h1>
        <h2>Add Notes</h2>
        <NoteInput addNote={this.onAddNoteHandler} />

        <h2>Search Notes</h2>
        <SearchBar onSearch={this.onSearchHandler} />

        {/* Display message when no matching notes found during search */}
        {filteredNotes && filteredNotes.length === 0 && <p>No notes found matching the search criteria.</p>}

        <h2>Notes List</h2>
        <NoteList
          notes={activeNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
        {/* Display message when there are no active notes */}
        {activeNotes.length === 0 && <p>There are no history of added notes.</p>}
        
        <h2>Archived Note</h2>
        <NoteList
          notes={archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
        {/* Display message when there are no archived notes */}
        {archivedNotes.length === 0 && <p>There are no notes archived.</p>}
      </div>
    );
  }
}

export default NoteApp;
