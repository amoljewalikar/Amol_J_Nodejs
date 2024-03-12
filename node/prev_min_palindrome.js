// let n = String(readLine())
let a = ["","2","12", "111", "32"];
for (let i = 0; i < a.length; i++) {
  let chkNum = a[i];
  console.log(chkNum)
  let myNum = parseInt(chkNum);
  if(chkNum.length == 1){
    console.log("Palindrome:",myNum.toString());
  }else if (myNum.toString().length > 1) {
    while (myNum >= 0) {
      myNum -= 1;
      let revNum = myNum.toString().split("").reverse().join("");
      let forNum = myNum.toString();
      if (revNum == forNum) {
        console.log("Immidiate palindrome:",revNum);
        break;
      }
    }
  }
}