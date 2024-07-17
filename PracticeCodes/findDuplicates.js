function findDuplicates(number) {
  let count,
    array = [];
  numSet.forEach((setElement) => {
    count = 0;
    number.forEach((arrElement) => {
      if (setElement == arrElement) {
        count += 1;
        if (count > 1) array.push(setElement);
      }
    });
  });

  return Array.from(new Set(array));
}

let number = [4, 7, 8, 9, 5, 4, 7, 6, 1, 4, 7, 2, 3, 7, 4, 4];
// let number = [1, 2];
let numSet = Array.from(new Set(number));

console.log(findDuplicates(number));

// function findDuplicates(number) {
//     for(let i = 0; i < numSet.length; i++) {
//         let count = 0;;
//         for(let j = 0; j < number.length; j++) {
//             if(numSet[i] == number[j]) {
//                 count++;
//                 if(count > 1) array.push(numSet[i]);
//             }
//         }
//     }
//     console.log(Array.from(new Set(array)));
// }
