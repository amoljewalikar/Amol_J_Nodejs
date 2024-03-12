function starParallelo(n){
    let s = "*".repeat(n);
    for(let i = 1; i <= n; i++){
        let t = ' '.repeat(i);
        t += s; 
        console.log(t);
    }
}

let n = 5;
starParallelo(n);


// o/p:
//  ******
//   ******
//    ******
//     ******