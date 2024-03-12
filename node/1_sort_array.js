// let candles = [1000, 1000, 1000, 1000, 1000, 999, 1000, 1000, 1000];
let candles = [1, 3, 2, 3];

console.log(candles);
let m = candles.sort(function(a, b){return a-b})[candles.length - 1];
console.log(candles, m);
