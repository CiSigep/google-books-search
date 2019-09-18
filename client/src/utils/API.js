import axios from 'axios';

const API = {
  searchBooks: (query, callback) => {
    axios.get("/api/search/" + query).then(res => {
      callback(res.data);
    }).catch(err => {
      console.log(err);
    });
  },

  saveBook: (book, callback) => {
    axios.post("/api/books", book).then(callback).catch(err => console.log(err));
  }
}

export default API;