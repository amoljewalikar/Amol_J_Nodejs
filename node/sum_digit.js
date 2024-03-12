let prompt = require('prompt-sync')();

function digitSum(num){
    let add = 0;
    while(num > 0){
        let r = num % 10;
        let q = parseInt(num / 10);
        add += r;
        num = q;
    }
    return add;
}

let n = parseInt(prompt('Enter a number:'));
console.log("Sum digits, of entered number:", digitSum(n));