function hollowSquare(n){
    let line_pat = '';
    for(let i = 1; i <= 1; i++){
        for(let j = 1; j <= n; j++){
            line_pat += '*';
        }
    }
    console.log(line_pat);
    for(let k = 1; k <= n - 2; k ++){
        let hollow_pat = '';
        for(let l = 1; l <= 1; l++){
            hollow_pat += '*';
            for(let m = 1; m <= n - 2; m++){
                hollow_pat += ' '
            }
            hollow_pat += '*';
            console.log(hollow_pat);
        }
    }
    console.log(line_pat);
}

let n = 10;
hollowSquare(n);

// o/p:
// ****
// *  *
// *  *
// ****