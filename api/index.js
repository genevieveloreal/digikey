require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send('hello chicken')
});

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
