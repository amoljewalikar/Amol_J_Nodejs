function starReversePyramid(n){
    for(let i = 1; i <= n; i++){
        let p = '', t = '';
        for(let j = 1; j <= i; j++){
            p += ' ';
        }
        for(let k = 1; k <=  2 * (n-i) - 1; k++){
            t += '*';
        }
        console.log(p + t + p);
    }
}

let  n = 7;
starReversePyramid(n);

// o/p:
