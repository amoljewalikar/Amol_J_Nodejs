const once = function(fn) {
    let flag = 0;
    return function(...args){
        if(flag == 1) {
            return undefined;
        } else {
            flag += 1;
            return fn(...args);
        }
    }
};

let fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
const onceFn = once(fn, calls);
console.log(onceFn);

// arr.forEach(element => {
//     const onceFn = once(fn(element));
//     console.log(onceFn);
// });
