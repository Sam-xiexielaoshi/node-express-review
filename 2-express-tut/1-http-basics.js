const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.method)
  // console.log(res.url)
  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>home page</h1>");
    res.end();
  }
  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>this is about page</h1>");
    res.end();
  }
  //404 issue page 
  else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>404 cannot request page from server</h1>')
    res.end();
  }
});
server.listen(5000);
