const express = require("express");
const app = express();
const {products,people} = require('./data')

app.get("/", (req, res) => {
  res.json(products, people);
});

app.listen(5000, () => {
  console.log(`the server is running on port 5000...`);
});
