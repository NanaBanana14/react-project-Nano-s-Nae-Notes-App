import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const newTitle = event.target.value;
    if (newTitle.length <= this.state.charLimit) {
      this.setState({
        title: newTitle,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote({
      title: this.state.title,
      body: this.state.body,
    });
    // Reset state after submitting
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => (
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <input
              className="note-input__title__char-limit"
              type="text"
              placeholder={locale === 'id' ? 'Judul' : 'Title'}
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <p>{`${this.state.charLimit - this.state.title.length} ${locale === 'id' ? 'karakter tersisa' : 'characters remaining'}`}</p>
            <input
              className="note-input__body"
              type="text"
              placeholder={locale === 'id' ? 'Catatan' : 'Note'}
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            />
            <button type="submit">{locale === 'id' ? 'Tambahkan Catatan' : 'Add Note'}</button>
          </form>
        )}
      </LocaleConsumer>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default NoteInput;
