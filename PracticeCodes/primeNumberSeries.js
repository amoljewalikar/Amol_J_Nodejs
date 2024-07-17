let prompt = require('prompt-sync')();

function checkPrime(num){
    let i = 2;
    while(i != num){
        if(num%i == 0){
            return 0;        
        }
        i++;
    }
    return num;
}


let n = parseInt(prompt('Enter a number: '));
let primes = [];
for (let i = 2; i < n; i++) {
    let res = checkPrime(i);
    if(res != 0)
        primes.push(res)
}
console.log("List of Primes: ",primes);
