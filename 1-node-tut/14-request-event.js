const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("my name is sam");
});

server.listen(5000);
