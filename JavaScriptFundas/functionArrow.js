let square1 = function(a){
    // console.log("Hello World!");
    return a ** 2;
}

console.log("square1 = function(a){return a ** 2}:",square1(4));

// let square = (a) => {
//     // console.log("Hello World!");
//     return a ** 2;
// }

// oneliner : like lambda in python         Arrow Function
let square = (a) => a ** 2;
console.log("square = (a) => a ** 2:",square(5));

//assignment
// let add = (a, b) => {
//     if(a > 0 && b > 0)  
//         return a + b 
// }
let add = (a, b) => a > 0 && b > 0 ? (a + b) : "a or b is -ve";
// let a = (a, b) => a > 0 && b > 0; console.log(a);  
console.log("Result:", add(5, 7));