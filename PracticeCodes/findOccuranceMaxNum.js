function myMax(max){
    if(candles.indexOf(max) == candles.lastIndexOf(max))
        return 1;
    else
        return candles.lastIndexOf(max) - candles.indexOf(max) + 1;
}

let candles = [1000, 1000, 1000, 1000, 1000, 999, 1000, 1000, 1000];
let max = candles.sort()[candles.length - 1];
console.log(max, candles);
console.log("Max occurance:", myMax(max));