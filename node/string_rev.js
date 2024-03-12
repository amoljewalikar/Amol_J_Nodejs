let prompt = require('prompt-sync')();

function strReverse(str){
    let a = str.length
    let rev_str = ''
    for (let i = a-1; i >= 0; i--) {
        rev_str += str[i];
    }
    return rev_str;
}

let s = prompt('Enter a string:');
console.log(strReverse(s));;