
// shift(): removes the first element of an array, modifies the array, and returns the removed element.
// unshift(): adds one or more elements to the beginning of an array, modifies the array, and returns the new length of the array.

let data = [5, 'Amol', {tech: 'Node'}, function greet(){ console.log("Hello from data Array.");}];

console.log("Accessing Object inside array data[2].tech:",data[2].tech);
console.log("Accessing function inside array data[3]():");
data[3]();

console.log("More functions - Arrays\n");

let numArr = [5, 6, 7, 8, 9, 1, 3, 2]
console.log("numArr.push(1), it returns lenghth of an array:", numArr.push(1));
console.log("numArr:", numArr);
console.log("\nnumArr.pop(), it returns last element popped from an array:", numArr.pop());
console.log("numArr:", numArr);
console.log("\nnumArr.shift(), it returns removed 1st ele from array, and shifts all elemnts to left:", numArr.shift());
console.log("numArr:", numArr);
console.log(`\nnumArr.unshift(2), it returns lenghth of an array, adds element to first place 
i.e. shifts all elemnts to right:`, numArr.unshift(2));
console.log("numArr:", numArr);
console.log("\nnumArr.splice(2, 3, 'AMOL'), it returns removed elements from an array:", numArr.splice(2, 3, 'AMOL')); 
// numArr.splice(2, 3, 'AMOL') => 2: index, 3: no. of elements, 'AMOL' - instead of string we can add numbers, array, object etc.
console.log("numArr:", numArr);
