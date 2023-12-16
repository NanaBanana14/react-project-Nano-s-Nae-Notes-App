import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../component/NoteList';
import SearchBar from '../component/SearchBar';
import {
  getActiveNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/api';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  function changeSearchParams(newKeyword) {
    setSearchParams({ keyword: newKeyword });
  }

  return (
    <HomePage
      notes={notes}
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      setNotes={setNotes}
    />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.defaultKeyword || '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  async componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes() {
    const { data } = await getActiveNotes();
    this.props.setNotes(data);
  }

  onDeleteHandler(id) {
    deleteNote(id).then(() => this.fetchNotes());
  }

  onArchiveHandler(id) {
    archiveNote(id).then(() => this.fetchNotes());
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id).then(() => this.fetchNotes());
  }

  onKeywordChangeHandler(keyword) {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  }

  render() {
    const activeNotes = this.props.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );

    return (
      <div className="note-app__body">
        <h1 className="note-app__header">My Notes List</h1>
        <h2>Search Notes</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />

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
  setNotes: PropTypes.func.isRequired,
};

export default HomePageWrapper;
