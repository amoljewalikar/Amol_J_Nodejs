// check anagram
const isAnagram = (s1, s2) => 
    [...s1.toLowerCase()].sort().join('') === [...s2.toLowerCase()].sort().join('') ? "Anagram" : "Not an Anagram";

console.log("1] isAnagram('listen', 'silent'): ",isAnagram('listen', 'silent'));

// merge two arrays, remove duplicates
const mergeArr = (a1, a2) => [...new Set([...a1], [...a2])]
console.log("2] mergeArr([1, 2, 3], [4, 5, 6], Merged arrays:", mergeArr([1, 2, 3], [4, 5, 6]));

// generate an array of `n` numbers
const genNums = n => [...Array(n).keys()].map(i => i + 1);   // => [1, 2, 3, 4,  5, 6, 7, 8, 9, 10] 
// const genNums = n => [...Array(n).keys()]; // => [0, 1, 2 ..., 9]
console.log("3] genNums(10):", genNums(10));

// Shuffle an array
const shuffleArr = arr => arr.sort(() => Math.random() - 0.5);
console.log("4] shuffleArr([1, 2, 3, 4, 5]):", shuffleArr([1, 2, 3, 4, 5]));

// cuurent date
const getDate = () => new Date().toISOString().split('T')[0]; 
// const getDate = () => new Date().toISOString();                  -> get date and time
// const getDate = () => new Date().toISOString().split('T')[1].split('.')[0];    -> get Time only
console.log("5] getDate():", getDate());

// get max num from array
const getMaxNum = arr => Math.max(...arr);
console.log("6] getMaxNum([26, 34, 21, 108, 15, 71]):", getMaxNum([26, 34, 21, 108, 5, 7]));

// elements in aray satisfy condition
const arrElements = (arr, condition) => arr.every(condition);
console.log("7] arrElements([2, 4, 5, 6, 7], num => num%2 == 0):",arrElements([2, 4, 5, 6, 7], num => num%2 == 0)); 

//  generate numbers (start, end, steps)
const rangeArr = (start, end, steps = 1) => [...Array(Math.floor((end-start)/ steps) + 1)].map((_, i) => start + (i * steps));
console.log("8] rangeArr(1, 20, 2):",rangeArr(1, 20, 2));