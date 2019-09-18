const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");

const router = express.Router();

const BOOKSURL = "https://www.googleapis.com/books/v1/volumes?q=";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const Book = require("../models/Book");

router.get("/api/search/:book", (req, res) => {
  axios.get(BOOKSURL + req.params.book).then(results => {
    let books = results.data.items.map(ele => {
       let {title, description, authors} = ele.volumeInfo;

       return {
         title: title,
         description: description,
         authors: authors,
         link: ele.volumeInfo.infoLink,
         image: ele.volumeInfo.imageLinks.smallThumbnail
       };
     });
    res.json(books);
  }).catch(err => {
    console.log(err);
    res.status(404).end();
  });
});

router.get("/api/books", (req, res) => {
  Book.find({}).then(books => res.json(books)).catch(err => {
    console.log(err);
    res.status(500).end();
  });
});

router.post("/api/books", (req, res) => {
  Book.create(req.body).then(book => {
    res.status(201).json(book._id);
  }).catch(err => {
    console.log(err);
    res.status(500).end();
  });
});

router.delete("/api/books/:id", (req, res) =>{
  Book.findByIdAndRemove(req.params.id).then(() => res.json(true)).catch(err => {
    console.log(err);
    res.status(500).end();
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


module.exports = router;