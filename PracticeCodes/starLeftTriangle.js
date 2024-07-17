function starLeftTriangle(n){
    for(let i = 1; i <= n; i++){
        let s = '';
        for(let j = 1; j <= i; j++){
            s += '*';
        }
        console.log(s);
    }
}

let n = 5;
starLeftTriangle(n);

// o/p:
// *
// **
// ***
// ****