const prompt = require("prompt-sync")();
function decToBinary(n) {
    let num = n, bin = '';
    while(num > 0) {
        let q = num%2;
        bin += String(q);
        num = parseInt(num/2);
    }
    console.log("bin::::>",bin);
    let count = 0, max = 0;
    for(let i = bin.length - 1; i >= 0; i--) {
        if(bin[i] == '1') count += 1;
        else count = 0;
        if(max < count) max = count;
        console.log("bin["+i+"]:", bin[i],"max::>", max, "count::>", count);
    }
    return max;
}

let n = Number(prompt("Enter a number: "))
console.log("decToBinary(n):",decToBinary(n));