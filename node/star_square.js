function starSquare(n){
    for(let i = 1; i <= n; i++){
        let s = '';
        for(let j = 1; j <= n; j++){
            s += '*';
        }
        console.log(s);
    }
}

let n = 5;
starSquare(n);

// o/p:
// *****
// *****
// *****
// *****
// *****