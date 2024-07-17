// 1. Find the longest prefix of t that is a subsequence of s.
// 2. Use two variables to keep track of your location in s and t. If the characters match, increment both variables. Otherwise,
// only increment the variable for s.
// 3. The remaining characters in t must be appended to the end of s.

const appendCharacters = function (s, t) {
    let apndChar = "", cmnChar = "";
    if (s[0] == t[0]) {
        apndChar += s[0];
        cmnChar += s[0];
        for (let i = 1; i < s.length; i++) {
            if (s[i] == t[i]) {
                apndChar += s[i];
                cmnChar += s[i];
            } else if (s[i] != t[i]) {
                apndChar += s[i];
            }
        }
    } else if (s[0] != t[0]) {
        for (let i = 0; i < s.length; i++)
            apndChar += s[i];
    }
    // console.log("aaaa:::::::>", apndChar);
    if (cmnChar != "") {
        t = t.split(cmnChar)[1];
        return t.length;
    } else if (cmnChar == "") {
            for (let i = 0; i < t.length; i++)
                apndChar += t[i];
            if(apndChar.at(-2) === apndChar.at(-1)) 
                return 0;
            return t.length;
        }
};
// let s = "coaching", t = "coding";
// let s = "abcde", t = "a";
// let s = "z", t = "abcde";
// let s = "z", t = "a";
// let s = "rahx", t = 'ln';
// let s = "zbc", t = "abc";
let s = "lbg", t = "g";
console.log(`appendCharacters(${s}, ${t}):`, appendCharacters(s, t));

// let appendStr = "", commonStr = "";
//   let str1 = s.length > t.length ? s : t;
//   let str2 = s.length < t.length ? s : t;
//   console.log(str1, str2);
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] == str2[i]) commonStr += str1[i];
//     else if (str1[i] != str2[i]) break;
//   }
//   if (commonStr != "") {
//     appendStr += commonStr;
//     console.log(str2.split(commonStr)[1].length, str1.split(commonStr)[1].length);
//     if (str2.split(commonStr)[1].length > str1.split(commonStr)[1].length) {
//       appendStr += str2.split(commonStr)[1];
//       appendStr += str1.split(commonStr)[1];
//       console.log("1:",appendStr);
//       return str1.split(commonStr)[1].length;
//     } else {
//       appendStr += str1.split(commonStr)[1];
//       appendStr += str2.split(commonStr)[1];
//       console.log("2:",appendStr);
//       return str2.split(commonStr)[1].length;
//     }
//   } else if(commonStr == ""){
//     appendStr += str1 + str2;
//     console.log("3:",appendStr);
//     return str2.length;
//   }
