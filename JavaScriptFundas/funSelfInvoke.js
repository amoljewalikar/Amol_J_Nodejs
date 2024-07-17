// Self-Invoking Functions
(function () {
    let x = "Hello!!";  // I will invoke myself
    console.log(x);
})();

// Functions Can Be Used as Values
function myFunction(a, b) {
    return a * b;
}

let x = myFunction(4, 3);
console.log("Functions Can Be Used as Values:",x);

// functions can be used in expressions
let y = myFunction(4, 3) * 2;
console.log("functions can be used in expressions:",y);


// Functions are Objects
function myFunc() {
    return arguments.length;
}

console.log("myFunc(4, 5, 7, 8, 9):",myFunc(4, 5, 7, 8, 9));