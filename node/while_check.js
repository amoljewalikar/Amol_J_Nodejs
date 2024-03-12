let flag = true;
let arr = [1, 3, 4, 2, 4, 2, 2, 5];
while(flag) {
    for (let i = 0; i < arr.length; i++) {
        console.log(flag, i);
        if (arr[i] == arr[i + 1]) {
          flag = false;
        }
      }
    //   console.log(flag);
    }
