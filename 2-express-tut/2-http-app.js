const http = require("http");
const { readFileSync } = require("fs");

//get ll the filwes

const homePage = readFileSync("./navbar-app/index.html");
const homeStyle = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.png");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log(req.method)
  // console.log(res.url)

  const url = req.url;
  console.log(url);

  //home page

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }

  //about page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>this is about page</h1>");
    res.end();
  }
  //styles
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  //mage/logo
  else if (url === "/logo.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(homeImage);
    res.end();
  }
  //styles
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  
  //404 issue page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 cannot request page from server</h1>");
    res.end();
  }
});

server.listen(5000);
