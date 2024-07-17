// let numArray = [1000, 1000, 1000, 1000, 1000, 999, 1000, 1000, 1000];
let numArray = [1, 3, 2, 3];

console.log(numArray);
let m = numArray.sort(function(a, b){return a-b})[numArray.length - 1];
console.log(numArray, m);
