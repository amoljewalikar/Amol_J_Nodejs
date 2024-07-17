let num = 15e5;
console.log("15 x 10^5:", num);

let n = 10_00_000;
console.log("n defined with _ :",n);

let infinityNum = 2/0;
console.log("infinityNum, 2/0:", infinityNum);

let negInfinityNum = -2/0;
console.log("negInfinityNum:", negInfinityNum, "\ttypeof negInfinityNum:",typeof negInfinityNum);

console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MAX_VALUE * 2:", Number.MAX_VALUE * 2);

console.log("Number.MIN_VALUE:", Number.MIN_VALUE);
console.log("Number.MIN_VALUE / -2:", Number.MIN_VALUE / -2);

let notNum = 100 / "Apple";
console.log("notNum:", notNum, "\ttypeof notNum:",typeof notNum);

let hexaDec = 0xf;
console.log("hexaDec:", hexaDec,  "\ttypeof hexaDec:", typeof hexaDec);

let bigIntNum = 1020309103094059439088n;
console.log("bigIntNum:",bigIntNum, "\ttypeof bigIntNum:",typeof bigIntNum);
console.log("bigIntNum + 2n:",bigIntNum + 2n);

// Telusko
let n1 = true; // 1
let n2 = true;// 1
let n3 = false; // 0
let result1 = n1 + n2;    // n1 - n2 => 0              Type Coersion
console.log("result1:", result1);
let result2 = n1 / n3;     // n1 * n3 => 0
console.log("result2:", result2);
let modNum = n1 % n2;         // n1 % n3 => NaN
console.log("modNUm:", modNum);

let num1 = 3;
console.log("num1:", num1);
num1 += 1;
console.log("num1 += 2:", num1);
console.log("-------------------increment------------");
let numS = num1++;     //post-increment
console.log("num1++:", num1, "numS:", numS);
numS = ++num1    //pre-increment
console.log("++num1:", num1,"numS:", numS);

console.log("-------------------decrement------------");
numS = num1--;     //post-decrement
console.log("num1--:", num1, "numS:", numS);
numS = --num1;    //pre-decrement
console.log("--num1:", num1, "numS:", numS);
console.log("-------------------Math.pow(baseValue, exponentNum)------alternamtive is: **------------");
let powNum = Math.pow(numS, 3);
// let powNum = numS ** 8;                              
console.log(`powNum = Math.pow(${numS}, 3)`, powNum);