// let num1 = 9
// let num2 = 7

// console.log(num1,">",num2,"?",num1,":",num2,"=>>>",num1 > num2 ? num1 : num2)
let num = 7;
let result;

if(num%2 == 0)
    result = "Even";
else
    result = "Odd";

console.log(num,"% 2 == 0 if-else result is:",result);

console.log("\nternary operator:");
console.log(num,"% 2 == 0 ? \"Even\" : \"Odd\"==>",num%2==0 ? "Even" : "Odd");