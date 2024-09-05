import fs from 'fs/promises';

let a = fs.writeFile('some.txt', "This is a text file\n");
let b = fs.appendFile('some.txt', "This is the append text");
console.log(a);