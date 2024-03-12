let alpha = {'a': 1, 'b': 2, 'c': 3, 'd': 4};
let s = 'aaabbbbcccddd';
let q = [9, 7, 8, 12, 5];
let res = [];
for(let i = 0; i < s.length; i++){
    let tmp = q[0], add = 0;
    while(add <= tmp){
        for(let key in alpha){
            if (key == s[i]){
                add += alpha[s[i]];
                if (add == tmp) {
                    res.push("Y");
                    q.shift();
                    // console.log(s[i], add, tmp);
                    break;
                } else if (add > tmp){
                    res.push("NO");
                    // console.log(s[i], add, tmp);
                    break;
                }
            }
        }
    }
}
console.log(res);