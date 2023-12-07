import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import {
  getAllNotes,
  getActiveNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/index';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(newKeyword) {
    setSearchParams({ keyword: newKeyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.updateNotes();
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.updateNotes();
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.updateNotes();
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  updateNotes() {
    this.setState({
      notes: getAllNotes(),
    });
  }

  render() {
    const activeNotes = getActiveNotes().filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <div className="note-app__body">
        <h1 className="note-app__header">My Notes List</h1>
        <h2>Search Notes</h2>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />

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

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
