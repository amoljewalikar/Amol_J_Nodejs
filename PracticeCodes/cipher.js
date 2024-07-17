function caesarCipher(s, k) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        if (s[i].match(/[a-z]/i)) {
            let base = s[i] === s[i].toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            let offset = (charCode - base + k) % 26;
            result += String.fromCharCode(base + offset);
        } else {
            result += s[i];
        }
    }

    return result;
}

// Test the function
let s = 'middle-Outz';
let k = 2;
console.log(caesarCipher(s, k)); // Output: okffng-Qwvb
