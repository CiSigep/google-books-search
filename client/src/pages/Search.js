import React from 'react';
import API from '../utils/API';
import SearchForm from '../components/SearchForm';
import List from '../components/List';

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
          <List books={this.state.books} buttonTxt="Save" title="Results" actionHandler={this.save}/>
        </div>
      </div>
    );
  }
}

export default Search;