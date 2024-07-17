function starRightTriangle(n){
    for(let i = 1; i <= n; i++){
        let s = '';
        for(let j = 1; j <= n-i; j++){
            s += ' ';
        }
        for(let k = 1; k <= i; k++){
            s += '*';
        }
        console.log(s);
    }
}

let n = 5;
starRightTriangle(n);

// o/p:
//      *
//     **
//    ***
//   ****
//  *****