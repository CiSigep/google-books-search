import React from 'react';
import API from '../utils/API';
import SearchForm from '../components/SearchForm';
import List from '../components/List';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

// Search page for books.
class Search extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books: []
    }
  }

  // Search for books
  search = query => {
    API.searchBooks(query, res => {
      this.setState({books: res});
    });
  };

  // Save a book.
  save = book => {
    API.saveBook(book, res => {
      toaster.notify("Saved!", { duration: 2000});
    });
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row mb-2">
          <SearchForm search={this.search}/>
        </div>
        <div className="row">
          <List books={this.state.books} buttonTxt="Save" title="Results" actionHandler={this.save}/>
        </div>
      </div>
    );
  }
}

export default Search;