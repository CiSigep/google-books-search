const express = require("express");
const axios = require("axios");

const router = express.Router();

const BOOKSURL = "https://www.googleapis.com/books/v1/volumes?q=";

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

router.post("/api/books", (req, res) =>{
  console.log(req.body);
  res.json({saved: true});
})

module.exports = router;