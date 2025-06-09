// modules - encasulated code only share minimum
//CommonJS - every file is a module by default
const names = require("./4-names");
const utils = require("./5-utils");
utils("chimkandi");
utils(names.john);
utils(names.doe);
require("./7-module-without-export"); // related to file on 7th position
