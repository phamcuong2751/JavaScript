// let math = require('./math');

// console.log(math.sum([1, 2, 3, 4]));
// console.log(math.multi(100, 2));
let readlineSync = require('readline-sync');
let isMine = {};
let name = readlineSync.question("What your name?: ");
let age = readlineSync.question("How old are you?: ");
let weith = readlineSync.question("Your weith?: ");
isMine.name = name;
isMine.age = age;
isMine.weith = parseInt(weith);
console.log(isMine);