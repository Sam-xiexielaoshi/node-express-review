const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hit it!!");
  res.status(200).send("home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("about");
});

app.all("/", (req, res) => {
  res.status(404).send("<h1>request cannot be accessed</h1>");
});

app.listen(5000, () => {
  console.log("serve is listening on port 5000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
