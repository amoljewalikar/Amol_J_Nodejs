function findLcd(num1, num2) {
    let n = (num1 < num2) ? num1 : num2;
    console.log(n);
    let i = 2, max = 1;
    while(i < n) {
        if(num1%i == 0 && num2%i == 0) 
            max = i;
        i += 1;
    }
    return max;
}


let num1 = 105, num2 = 225;
console.log("LCD Max:", findLcd(num1, num2));