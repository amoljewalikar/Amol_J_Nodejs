global: myVar = 10;
function processData(input) {
  let inArr = input.split("\n");
  console.log("inArr.length:", inArr.length);
  let tmp = new Map();
  myVar--;
  console.log(myVar);
  for (let i = 1; i <= Number(inArr[0]); i++)
    tmp.set(inArr[i].split(" ")[0], inArr[i].split(" ")[1]);

  for (let j = Number(inArr[0]) + 1; j <= inArr.length; j++) {
    if (tmp.get(inArr[j])) console.log(`${inArr[j]}=${tmp.get(inArr[j])}`);
    else console.log("Not found");
  }
}

processData(
  "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry"
);
myVar++;
console.log(myVar);

