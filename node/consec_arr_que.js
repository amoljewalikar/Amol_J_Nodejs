const prompt = require("prompt-sync")();

let count = 0, numArray = [], flag = true;

function findConsecutivesMult(n) {
  let num = n;
  numArray = String(num).split("").map(Number);
  console.log(`Original Array:  ${numArray}`);
  while (flag) {
    let randomIndex = Math.floor(Math.random() * numArray.length);
    let randomDigit = numArray[randomIndex];
    let randomDigitMult = n * randomDigit;
    console.log("randomDigit:", randomDigit, "randomDigitMult:", randomDigitMult);
    let tmpArray = String(randomDigitMult).split("").map(Number);
    numArray.push(tmpArray);
    numArray = numArray.flat();
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] == numArray[i + 1]) flag = false;
    }
    count += 1;
  }
  console.log(`Updated Array:  ${numArray}`);
  return count;
}

let n = Number(prompt("Enter a number: "));
console.log("findConsecutivesMult(num), operartion count:", findConsecutivesMult(n));
