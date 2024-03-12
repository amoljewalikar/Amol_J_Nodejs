function superReducedString(s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    if (stack.length === 0) {
        return "Empty String";
    } else {
        return stack.join('');
    }
}

// Test the function
let s = "gfqqiwjdllsutxlpskxlrgmnunpobgvuimnudvtisdilhzaafarzlyjypvdcsvbpxdtsslszevkiclshpzbeuegxdnofgpuneduo";
console.log("result:", superReducedString(s))
