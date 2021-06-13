const path = require("path");

//file name
console.log(__filename);

//base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//extension name
console.log(path.extname(__filename));

//create object with diferent part of file
console.log(path.parse(__filename));
//this is the output
// {
//   root: '/',
//   dir: '/Users/moshiurr/GitHub/NodeJS/references',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }
