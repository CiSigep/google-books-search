import React from 'react';
import List from '../components/List';
import API from '../utils/API';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

// Saved page, displays the saved books
class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  // Get the books the user has saved.
  componentDidMount(){
    API.getSavedBooks(res => {
      this.setState({books: res});
    });
  }

  // Delete a saved book and remove it from the list.
  deleteBook = book => {
    API.deleteBook(book, res => {
      let newBooks = this.state.books.filter(ele => {
        return book._id !== ele._id;
      });

      this.setState({books: newBooks});

      toaster.notify("Deleted!", { duration: 2000});
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