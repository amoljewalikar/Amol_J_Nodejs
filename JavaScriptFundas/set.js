let newSet = new Set("Bookkeeper");     // Constructor for Set()
console.log(newSet, typeof newSet);  // => Set(6) { 'B', 'o', 'k', 'e', 'p', 'r' } here 6 is length of Set

// newSet = "BookKeeper"
// console.log(newSet)

let numSet = new Set();
numSet.add(3);
numSet.add(3);
numSet.add(3);
numSet.add(4);
numSet.add("amol");
numSet.add("Javascript");
numSet.add([3, 4, 5]);

console.log("numSet:", numSet);
numSet.forEach((ele) => console.log("forEach ele:",ele))

console.log("numSet.has(2):",numSet.has(2));
console.log("numSet.has('amol'):",numSet.has('amol'));
console.log("numSet.size:",numSet.size);
// let chkSet = numSet.entries();
for(const ele of numSet.entries()){
    console.log(ele);
}