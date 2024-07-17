let num = [];

num[2] = 0;
num[49] = 20;

console.log("num:", num);
console.log("num.length:", num.length);

// for(let i = 0; i < num.length; i++){
//     console.log("num["+i+"]:", num[i]);
// }

// for - of loop
// for (const i of num) {
//     console.log(i);
// }

// for - in loop
for (const key in num) {
  console.log(key);
}