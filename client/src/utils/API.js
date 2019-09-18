import axios from 'axios';

// Sends requests to the server's API routes
const API = {
  // Search for books
  searchBooks: (query, callback) => {
    axios.get("/api/search/" + query).then(res => {
      callback(res.data);
    }).catch(err => {
      console.log(err);
    });
  },
  // Save a book
  saveBook: (book, callback) => {
    axios.post("/api/books", book).then(callback).catch(err => console.log(err));
  },
  // Retrieves books the user has saved
  getSavedBooks: callback => {
    axios.get("/api/books").then(res => {callback(res.data)}).catch(err => console.log(err));
  },
  // Deletes a saved book.
  deleteBook: (book, callback) => {
    axios.delete("/api/books/" + book._id).then(res => {callback(res.data)}).catch(err => console.log(err));
  }
}

export default API;