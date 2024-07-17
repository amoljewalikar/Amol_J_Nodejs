let n = [0,10,20,30]
function greaterThan10(n) { return n > 10; }
let result = n.filter(x => greaterThan10(x));
console.log("\n[0,10,20,30].filter(x => greaterThan10(x)): ",result,"\n")
// console.log( greaterThan10(n));

// Object isEmpty()
const isEmpty = function(obj) {
    return Object.keys(obj).length == 0 ? true : false;
};

console.log("isEmpty({}): ",isEmpty({}));
console.log("isEmpty({\"x\": 5, \"y\": 42}): ",isEmpty({"x": 5, "y": 42}));
console.log("isEmpty([null, false, 0]): ",isEmpty([null, false, 0]));