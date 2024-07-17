// var is hoisted. => Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
// var does not have to be declared.
// var binds to this.

// Variables declared with the var always have Global Scope.
// Variables declared with the var keyword can NOT have block scope
// Variables declared with varinside a { } block can be accessed from outside the block:
{
    var x = 2;
    console.log("inside block x:",x);
}
// x CAN be used here
var x = "Joe";
console.log("outside block x:",x);


// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems.
// Redeclaring a variable inside a block will also redeclare the variable outside the block:
var x = 10;
// Here x is 10
{
var x = 2;
// Here x is 2
}
// Here x is 2