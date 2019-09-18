import React from 'react';
import API from '../utils/API';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

class Search extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books: []
    }
  }

  search = query => {
    API.searchBooks(query, res => {
      this.setState({books: res});
    });
  };

  save = book => {
    API.saveBook(book, res => {
      console.log("saved");
    });
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row mb-2">
          <SearchForm search={this.search}/>
        </div>
        <div className="row">
          <SearchList books={this.state.books} saveBook={this.save}/>
        </div>
      </div>
    );
  }
}

export default Search;