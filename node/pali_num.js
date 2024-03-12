let prompt = require('prompt-sync')();

let revNum = ''
function numPalindrome(num){
    let n = num;
    while(num > 0){
        let r = num % 10;
        let q = parseInt(num / 10);
        revNum += String(r);
        num = q
    }
    if(n == parseInt(revNum)) 
        return n + " is a Palindrome";
    return n + " is NOT a Palindrome";
}

let n = parseInt(prompt('Enter a number:'));
console.log(numPalindrome(n));