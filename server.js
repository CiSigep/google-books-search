const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/get", (req, res) => {
  res.json({running:  "true"});
});


app.listen(PORT, () => {
  console.log("App listening on port: " + PORT);
});
