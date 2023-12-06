import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  onInputChange = (e) => {
    const keyword = e.target.value;
    this.setState({ keyword });
    this.props.onSearch(keyword);
  };

  render() {
    return (
      <input
        className='note-search'
        type="text"
        placeholder="Search by title"
        value={this.state.keyword}
        onChange={this.onInputChange}
      />
    );
  }
}

export default SearchBar;
