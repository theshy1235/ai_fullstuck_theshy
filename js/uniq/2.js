const unique = require('./1.js')

// var result = uniq([1, 1, '1', '1'])
// console.log(result);
console.log(unique([1,2,1,"1"]))
console.log(unique([1, 1, "1", 2], true))