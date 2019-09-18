const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production"){
  app.use("static", express.static(path.join("..", "client", "build")));
}

app.use(require("./controllers/BooksController"));


app.listen(PORT, () => {
  console.log("App listening on port: " + PORT);
});
