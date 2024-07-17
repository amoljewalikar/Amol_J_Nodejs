// Block Scope
// Before ES6 (2015), JavaScript did not have Block Scope.
// JavaScript had Global Scope and Function Scope.
// ES6 introduced the two new JavaScript keywords: let and const.
// -------------------------------------------------------------------------------
// let and const have block scope.
// let and const can not be redeclared.
// let and const must be declared before use.
// let and const does not bind to this.
// let and const are not hoisted.
// -------------------------------------------------------------------------------

// The let keyword was introduced in ES6 (2015)
// Variables declared with let have Block Scope
{
    let x = 2;
    console.log("inside block x:", x);
}
// console.log("outside block x:", x);         => ReferenceError: x is not defined

// let must be Declared before use


// let cannot be Redeclared in the same scope
let x = "John Doe";
// let x = 0;    => SyntaxError: Identifier 'x' has already been declared


// Redeclaring a variable using the let keyword can solve this problem.
// Redeclaring a variable inside a block will not redeclare the variable outside the block:

let y = 10;
// Here y is 10
{
    let y = 2;
// Here y is 2
}
// Here y is 10