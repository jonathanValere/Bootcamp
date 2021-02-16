//module natif à node
// const fs = require('fs');

// fs.copyFileSync("file1.txt", "file2.txt")
// console.log("copied!");

//module externe
const supervillains = require('supervillains');
const superHeroes = require('superheroes');
let superHeroe = superHeroes.random();
let superVillain = supervillains.random();

console.log(`${superHeroe} against ${superVillain}`);
