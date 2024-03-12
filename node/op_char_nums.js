function charNum(inputStr) {
    let add = 0;
    for(let i = 0; i < inputStr.length; i++) {
        if(Number(inputStr[i])){
            // console.log(Number(inputStr[i]));
            add += Number(inputStr[i]); 
        }
    }
    let result = add/inputStr.length;
    // console.log(add, result, inputStr.length);
    let t = result - parseInt(add/inputStr.length)
    if(t < 0.5)
        return Math.floor(result);
    else 
        return Math.ceil(result);
    // let roundedResult = (t < 0.5) ? Math.floor(result) : Math.ceil(result);
    // return roundedResult;
}

let inputStr = 'He4llo3Wor7l6d8';
console.log("Result:", charNum(inputStr));