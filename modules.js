// console.log(arguments);
// console.log(require('module').wrapper);

const calculator = require('./test-module-1');

const calc1 = new calculator();

console.log(calc1.add(5, 20));


//exports
const calc2 = require('./test-module-2');
console.log(calc2.add(6, 12));


//catching
require('./test-module')();
