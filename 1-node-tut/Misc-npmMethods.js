// npm - global command comes with node
//npm --v

//local dependency - use it in any project
//npm i <package_name>

//global dependency - use it in any project
//npm i -g <package_name>

//package.json - manifest file (stores important info about project)
//manual approach (create package.json in root, add or create properties)
//npm init (step by step, create package.json)
//npm init -y (everything default, create package.json)

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);