function powerCheck(n) {
    // let num = (String(n)).split('').flatMap(Number).reduce((x, y) => { return  x + y});
    // console.log("Num:::>", num, n);
    let t = 0, temp = 0, num = 0;
    while(temp < n) {
        temp = 3**t;
        console.log("temp:", temp, t);
        t += 1;
        if(temp == n)
            return true;
    }
    return false;
}

console.log("Result:", powerCheck(179));