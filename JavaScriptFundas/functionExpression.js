// anonymous function: function is an object in Javascript
let add = function(a, b){
    return a + b;
}

console.log("Result:", add(5, 7));
console.log("typeof add:", typeof add);

let sum = add
let result = sum(1, 9)
console.log("result:", result);
