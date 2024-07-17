const map = function(arr, fn) {
    let array = [];
    for(let i = 0; i < arr.length; i++)
        array.push(fn(arr[i], i));
    return array;
};

let arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// // Output: [2,3,4]
// let arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// //Output: [1,3,5]
// let arr = [10,20,30], fn = function constant() { return 42; }
// // Output: [42,42,42]
console.log(map(arr, fn));