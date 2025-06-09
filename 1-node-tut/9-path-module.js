// path module

const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subfolder", "test.txt");
console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subforlder", "test.txt");
const absolut = path.resolve(__filename, "content", "subforlder", "test.txt");
console.log(absolute, absolut);
// __dirname is a global variable that gives the absolute path of the current directory
// __filename is a global variable that gives the absolute path of the current file