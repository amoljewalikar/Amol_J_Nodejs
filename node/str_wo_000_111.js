const prompt = require("prompt-sync")();

let m = parseInt(prompt("Enter a number for 0's:"))
let n = parseInt(prompt("Enter a number for 1's:"))
let obj = {
    '0': m,
    '1': n
}
let strForm = ''
let mainCount = m + n
let count = 0
Object.entries(obj).forEach(([key, value]) => {
    console.log(key,":", value)
    
    while(count < mainCount){
        count += 1
    }
});
console.log("Result:",strForm.length,"",count)