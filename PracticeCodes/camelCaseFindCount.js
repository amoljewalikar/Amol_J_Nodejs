function countCamelCase(str) {
    let count = 0;
    for(let i = 0; i < s.length - 1; i++){
        let c = s[i];
        if(c == s[i].toUpperCase())
            count++;
    }
    return count;
}



let s = 'saveChangesInTheEditor';
console.log("Result Count Camel Case:", countCamelCase(s));