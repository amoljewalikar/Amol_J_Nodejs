function dec_to_bin(num){
    let n = num, dec_arr = [], bin_arr = [];
    while(n > 0){
        let q = n % 2; 
        n = parseInt(n / 2);
        dec_arr.push(q);
    }
    for (let i = dec_arr.length-1; i >= 0 ; i--) {
        bin_arr.push(dec_arr[i]);
    }
    return bin_arr;
}

console.log(dec_to_bin(25));