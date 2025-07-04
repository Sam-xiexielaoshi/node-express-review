const express = require("express");
const path = require("path");
const app = express();

//setup static and middleware
app.use(express.static("./navbar-app")); //middle ware setup

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.all("/", (req, res) => {
  res.status(404).send("resources missing");
});

app.listen(5000, () => {
  console.log(`the port is running on ${5000}`);
});
