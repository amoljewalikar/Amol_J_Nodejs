function isSubsequence(s, t) {
    // let q = [];
    // let tmp = t.split('');
    // console.log(tmp);
    // for(let j = 0; j < s.length; j++){
    //     for(let i = 0; i < tmp.length; i++) {
    //         if(s[j] == tmp[i]) {
    //             q.push(tmp[i]);
    //             // tmp.pop(i);
    //         }
    //         // console.log(tmp);
    //     }
    // }
    // console.log("result:::>", q,"s::>", s);
    // q = q.sort().join('');
    // console.log("result:::>", q,"s::>", s);
    // let result = (s === q) ? true : false;
    // return result;

    let sIndex = 0, tIndex = 0;
    while (sIndex < s.length && tIndex < t.length) {
        console.log(s[sIndex], t[tIndex]);
        if (s[sIndex] === t[tIndex]) 
            sIndex++;
        tIndex++;
    }
    return sIndex === s.length;
}

// Example usage:
const s = "acb";
const t = "ahbgdc";
console.log(isSubsequence(s, t)); // Output: 2
