import React, { useState, useEffect } from 'react';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import {
  getAllNotes,
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/index';

function ArchivePage() {
  const [notes, setNotes] = useState(getAllNotes());
  const [filteredNotes, setFilteredNotes] = useState(null);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const onDeleteHandler = (id) => {
    deleteNote(id);
    updateNotes();
  };

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    const filteredNotes = getAllNotes().filter(
      (note) => note.title.toLowerCase().includes(newKeyword.toLowerCase())
    );

    setFilteredNotes(filteredNotes);
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    updateNotes();
  };

  const onUnarchiveHandler = (id) => {
    unarchiveNote(id);
    updateNotes();
  };

  const updateNotes = () => {
    setNotes(getAllNotes());
    setFilteredNotes(null);
  };

  const archivedNotes = filteredNotes
    ? filteredNotes.filter((note) => note.archived)
    : getArchivedNotes();

  return (
    <div className="note-app__body">
      <h1 className="note-app__header">Your Archived Notes</h1>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {filteredNotes && filteredNotes.length === 0 && (
        <p>No notes found matching the search criteria.</p>
      )}

      <NoteList
        notes={archivedNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        onUnarchive={onUnarchiveHandler}
      />
      {/* Display message when there are no archived notes */}
      {archivedNotes.length === 0 && <p>There are no notes archived.</p>}
    </div>
  );
}

export default ArchivePage;
