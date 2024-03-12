// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181.

let prompt = require('prompt-sync')();

function fibo(num){
    let a = 0, b = 1;
    if(num == 0)
        console.log(a);
    else if(num == 1)
        console.log(a, b);
    else if(num > 1){
        for(let i = 0; i < num; i++){
            add = a + b
            console.log(a);
            a = b;
            b = add;
        }    
    }     
}

let n = parseInt(prompt('Enter a number:'));
fibo(n);
