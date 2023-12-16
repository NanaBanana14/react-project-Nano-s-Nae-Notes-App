import React, { useState, useEffect } from 'react';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import {
  getArchivedNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/api';
import { LocaleConsumer } from '../contexts/LocaleContext';

function ArchivePage() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(null);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await getArchivedNotes();
      if (!result.error) {
        setNotes(result.data);
      }
    }
    fetchData();
  }, []);

  const onDeleteHandler = async (id) => {
    const result = await deleteNote(id);
    if (!result.error) {
      updateNotes();
    }
  };

  const onKeywordChangeHandler = (newKeyword) => {
    setKeyword(newKeyword);
    const filteredNotes = notes.filter(
      (note) => note.title.toLowerCase().includes(newKeyword.toLowerCase())
    );

    setFilteredNotes(filteredNotes);
  };

  const onArchiveHandler = async (id) => {
    const result = await archiveNote(id);
    if (!result.error) {
      updateNotes();
    }
  };

  const onUnarchiveHandler = async (id) => {
    const result = await unarchiveNote(id);
    if (!result.error) {
      updateNotes();
    }
  };

  const updateNotes = async () => {
    const result = await getArchivedNotes();
    if (!result.error) {
      setNotes(result.data);
      setFilteredNotes(null);
    }
  };

  const archivedNotes = filteredNotes
    ? filteredNotes.filter((note) => note.archived)
    : notes;

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <div className="note-app__body">
          <h1 className="note-app__header">
            {locale === 'id' ? 'Catatan Terarsip mu' : 'Your Archived Notes'}
          </h1>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
          {filteredNotes && filteredNotes.length === 0 && (
            <p>
              {locale === 'id'
                ? 'Tidak ada catatan yang cocok dengan kriteria pencarian.'
                : 'No notes found matching the search criteria.'}
            </p>
          )}

          <NoteList
            notes={archivedNotes}
            onDelete={onDeleteHandler}
            onArchive={onArchiveHandler}
            onUnarchive={onUnarchiveHandler}
          />
          {/* Display message when there are no archived notes */}
          {archivedNotes.length === 0 && (
            <p>{locale === 'id' ? 'Tidak ada catatan yang terarsip.' : 'There are no notes archived.'}</p>
          )}
        </div>
      )}
    </LocaleConsumer>
  );
}

export default ArchivePage;
