function mirrorRhombus(n){
    let s = '*'.repeat(n);
    for(let i = n; i > 0; i--){
        let t = ' '.repeat(i);
        t += s;
        console.log(t);
    }
}

let n = 5;
mirrorRhombus(n);

// o/p:
//      *****
//     *****
//    *****
//   *****
//  *****