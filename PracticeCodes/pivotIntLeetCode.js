const pivotInteger = function(n) {
    let lSum = 0, rSum = n, flag = true;
    for(let i=1; i <= n; i++)
        lSum += i;
    console.log("lSum:",lSum);
    while(lSum < rSum){
        for(let i = 1; i <= n; i++)
            rSum += i;
        console.log("rSum:",rSum);
        if(rSum == lSum) {
            flag = false;
            break;
        } 
        else if(rSum > lSum) {
            return -1;
        }
    }
    return n;

    // return String(n).length == 1 && n > 0 ? n : -1;
};

console.log("pivotInteger(n):",pivotInteger(6));