require("dotenv").config();
const express = require("express");
const newsletter = require("./newsletter.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/newsletter", newsletter);

app.listen(8080, function () {
  console.log("Server listening on port 8080");
});
