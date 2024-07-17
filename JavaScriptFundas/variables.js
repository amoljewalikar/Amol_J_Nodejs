// Variables are Containers for Storing Data

// When to Use var, let, or const?
// [1]. Always declare variables      [2]. Always use const if the value should not be changed
// [3]. Always use const if the type should not be changed (Arrays and Objects)      [4]. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

// JavaScript Variables can be declared in 4 ways:
// 1]Automatically
x = 5;
y = 6;
z = x + y;
console.log("Additon x+y:",z)

// Using var
var a = "my name";
var b = " is AMOL";
console.log("String concat:", a + b);

// Using let
let q = 12;
let r = 4;
console.log("Division:", q/r);

// Using const : constant values and cannot be changed.
const i = 10;
const j = 20;
// console.log("Multiplication:", i *= j) => TypeError: Assignment to constant variable
const k = i * j;
console.log("Multiplication:", k);