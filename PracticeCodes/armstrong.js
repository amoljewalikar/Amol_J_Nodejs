function armstrong(n){
    let num = n
    let sum = 0;
    while(num > 0){
        let quo = parseInt(num / 10);
        let rem = num % 10;
        sum += rem**3;
        num = quo;
    }
    if(sum == n) 
        return `${n} is an Armstorng number`;
    return `${n} is not an Armstorng number`;
}


console.log(armstrong(153));