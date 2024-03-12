function checkPangram(s){
    return new Set(s.toLowerCase().split(' ').join("")).size == 26 ? "pangram" : "not pangram";
}




let  s = 'We promptly judged antique ivory buckles for the next prize';
console.log("Pangram result:", checkPangram(s));