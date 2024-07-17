// // A closure allows a function to "remember" and access variables from its outer scope, 
// // even when the function is executed outside that scope.


function counter(n){
    let count = n;
    return () => {
        count++;
        return count;                       
    }
}

let result = counter(10);
console.log("Result count:", result());
console.log("Result count:", result());
console.log("Result count:", result());
console.log("Result count:", result());
console.log("Result count:", result());
console.dir(result);
