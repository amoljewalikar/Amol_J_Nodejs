'use strict';
console.log("Hoisting applies only for var type, not for let and const");

console.log("\nMy name:", myName);
var myName = "Amol"
console.log("\nMy name after assignment/defined:", myName);

console.log(`\nwhat JS thinks it is as follows,
var myName              => i.e. Only the declaration gets on top of the code not the initialization
console.log("My name:", myName);
myName = "Amol"\n`);

console.log(`for functions the definition of function gets hoisted`);
// console.log("Function hoisting:", );
result();

function result(){
    console.log( "Hey there....");
}

// 'use strict';
// var x;
// console.log(x);
// x = 5;