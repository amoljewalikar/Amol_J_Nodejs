function alternet(s) {
    let str = '';
    let tmp = '';
    if (str.length === 0) {
        return 0;
    } else {
        for (let char = 0; char < str.length; char++) {
            tmp = '';
            for (let i = 0; i < s.length; i++) {    
                if (str[char] != s[i])
                    tmp += s[i];
            }
            
            s = tmp;
        }
        return tmp;
    }
}

let s = "gfqqiwjdllsutxlpskxlrgmnunpobgvuimnudvtisdilhzaafarzlyjypvdcsvbpxdtsslszevkiclshpzbeuegxdnofgpuneduo";
console.log("result:", alternet(s))
