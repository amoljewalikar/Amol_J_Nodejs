const chunk = function (arr, size) {
  if (arr.length == 0) return arr;
  else {
    let i = arr.length, arrNew = [];
    while (i > 0) {
      arrNew.push(arr.splice(0, size));
      i -= size;
    }
    return arrNew;
  }
};

console.log("Result:", chunk([8,5,3,2,6], 6));
