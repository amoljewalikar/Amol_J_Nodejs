let inputStr = "a3d7a2u3i7";
// o/p : aaadddddddaauuuiiiiiii

function multiChars(inputStr){
    let strForm = ''
    for (let i = 0; i < inputStr.length; i++) {
        for(let j = 0; j < inputStr[i+1]; j++)
            strForm += inputStr[i];
    }
    return strForm;
}

console.log("Result: ",multiChars(inputStr));


    // let i = 0; 
    // while (i < inputStr.length) {
    //     for(let j = 0; j < inputStr[i+1]; j++)
    //         strForm += inputStr[i];
    //     i++;
    // }