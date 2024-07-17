// one way to decalr array
let vals = new Array();
console.log("vals:",vals);
// another way
let values = [1, 2, 3]
console.log("values:", values);
console.log("values.length:", values.length);
//push numbers in array
values.push(4)
values.push(5)
console.log("values:", values);
console.log("values[0]:", values[0]);
console.log("values[values.length - 1]:", values[values.length - 1]); // Javascript does not support -ve indexing
console.log("values[6]:", values[6]);   // => undefined

let names = ['Amol', 'Harshal', 'Varad']
names[3] = 'Rahul'
names[6] = 'Amol G'  // => [ 'Amol', 'Harshal', 'Varad', <2 empty items>, 'Rahul' ]
console.log("names:", names);
console.log("names[4]:", names[4]);  // => undefined

let newName = names.slice(2, 7)
console.log("newName: "+newName);