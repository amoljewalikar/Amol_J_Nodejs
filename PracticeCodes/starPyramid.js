function starPyramid(n){
    for(let i = 1; i <= n; i++){
        let p = '', t = '';
            for(let j = 1; j <= n - i; j++){
                p += ' ';
            }
            for(let k = 1; k <= i*2 - 1; k++){
                t += '*';
            }
        console.log(p + t + p);
    }
}

let  n = 7;
starPyramid(n);