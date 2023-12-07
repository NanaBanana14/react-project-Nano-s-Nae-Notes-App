import React from 'react';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import {
  getAllNotes,
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/index';

class ArchivePage extends React.Component {
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
    const archivedNotes = filteredNotes ? filteredNotes.filter(note => note.archived) : getArchivedNotes();

    return (
      <div className="note-app__body">
        <h1 className="note-app__header">Your Archived Notes</h1>
        <SearchBar onSearch={this.onSearchHandler} />
        {filteredNotes && filteredNotes.length === 0 && <p>No notes found matching the search criteria.</p>}

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

export default ArchivePage;