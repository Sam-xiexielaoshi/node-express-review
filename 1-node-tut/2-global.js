
//Global - no window

console.log(__dirname);//path to current directory
console.log(__filename);//file name 
console.log(require.main === module);//functio to use modules 
console.log(module.exports === exports);//info about current module
console.log(process.env.NODE_ENV);//info about env where the program is being executed


setInterval(() => {
  console.log('Running...');
}, 1000);