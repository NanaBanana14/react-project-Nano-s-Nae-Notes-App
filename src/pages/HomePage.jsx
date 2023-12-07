import React from 'react';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import {
    getAllNotes,
    getActiveNotes,
    deleteNote,
    archiveNote,
    unarchiveNote,
  } from '../utils/index';
 
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      filteredNotes: null,
    };
 
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.updateNotes = this.updateNotes.bind(this);
  }
  onDeleteHandler(id) {
    deleteNote(id);
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
    return (
        <div className="note-app__body">
          <h1 className="note-app__header">My Notes List</h1>
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
        </div>
      );
  }
}
 
export default HomePage;