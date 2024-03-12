let numArr = [23, 11, 54, 98, 22, 87, 90, 1, 112];
let charArr = ['a', 'x', 'e', 'l', 'b', 'o', 'q']

// console.log("numArr:",numArr.sort());
// console.log("charArr:",charArr.sort());

console.log("DESCENDING ORDER:");
console.log("numArr.sort((a, b) => a > b ? -1 : 1):", numArr.sort((a, b) => a > b ? -1 : 1))
console.log("charArr.sort((a, b) => a > b ? -1 : 1):", charArr.sort((a, b) => a > b ? -1 : 1))

console.log("ASCENDING ORDER:");
console.log("numArr.sort((a, b) => a > b ? -1 : 1):", numArr.sort((a, b) => a < b ? -1 : 1))
console.log("charArr.sort((a, b) => a > b ? -1 : 1):", charArr.sort((a, b) => a < b ? -1 : 1))