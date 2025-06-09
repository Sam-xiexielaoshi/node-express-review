const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result: ${first}, ${second}`,
      "utf8",
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      }
    );
  });
});
console.log('starting the next one');


//nested callbacks => callback hell for sure

//to save ourself from this monstrosity, we use promises and async/await