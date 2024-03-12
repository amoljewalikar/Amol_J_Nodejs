let prompt = require('prompt-sync')();

function checkPrime(num){
    let i = 2;
    let k = parseInt(num/2);
    while(i != k){
        if(num%i == 0){
            return num + " is NOT a Prime";        
        }
        i++;
    }
    return num + " is a Prime";
}


let n = parseInt(prompt('Enter a number: '));
console.log(checkPrime(n));
