let num = [5, 7, 2, 4];
console.log("num:", num);
let [a, b, , d] = num;

console.log(a, b, d);

let n = 5;
let m = 7;
[m, n] = [n, m];        // swap two values w/o 3rd var
console.log("m:"+ m +"\t"+"n:"+ n);


let line = "Javascript is an easy language for front and back END".split(' ');
let [p, q, ...t] = line;
console.log(p, q, t);