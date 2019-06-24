//example code of how to work with functions

// importando functions
const helpers = require("./helpers");
//importando só o sum
const {sum} = require("./helpers");

const total = sum(2, 3);
const total2 = helpers.sub(2, 3);
const total3 = helpers.prod(2, 3);
const total4 = helpers.pot(3);
// const total5 = helpers.sqr(3);

console.log("soma = ", total);
console.log("sub = ", total2);
console.log("prod = ", total3);
console.log("pot de 2 = ", total4);
//console.log("quadrado = ", total5);