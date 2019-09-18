import React from 'react';
import List from '../components/List';
import API from '../utils/API';

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount(){
    API.getSavedBooks(res => {
      this.setState({books: res});
    });
  }

  deleteBook = book => {
    API.deleteBook(book, res => {
      let newBooks = this.state.books.filter(ele => {
        return book._id !== ele._id;
      });

      this.setState({books: newBooks});
    });
  } 
  
  render(){
    return(
      <div className="container-fluid">
        <div className="row mb-2">
          <List books={this.state.books} buttonTxt="Delete" title="Saved Books" actionHandler={this.deleteBook}/>
        </div>
      </div>
    );
  }
}

export default Saved;